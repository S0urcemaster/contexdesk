'use client'
import React, { ReactElement, useEffect, useState } from 'react';
import Mask from './view/mask';
import Results from './view/results';
import Requests from './view/requests';
import MenuHead from './view/menuHead';
import MaskList from './view/maskList';

type MaskData = string

type Mask = {
	name: string
	data: MaskData
	form: ReactElement
}

export type AppState = {
	currentMask: Mask
	maskList: Mask[]
}

export default function App() {
	const [text, setText] = useState('')
	const translateForm = () => {
		return <>
			<h2>Translate</h2>
			<input type='text' value={text} onChange={event => setText(event.target.value)} />
		</>
	}
	
	const defaultForm = ({valueChanged}:{valueChanged: (value: string) => void}) => {
		const [text, setText] = useState('')
		useEffect(() => {
			valueChanged(text)
			console.log('text', text)
		}, [text])
		return <>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<p>Text</p>
				<textarea value={text} rows={4} cols={50} onChange={event => setText(event.target.value)} />
			</div>
		</>
	}

	const [state, setState] = useState(
		{
			currentMask: {
				name: 'default',
				data: '',
				form: translateForm()
			},
			maskList: [
				{
					name: 'translate',
					data: '',
					form: defaultForm({valueChanged: (value: string) => {}})
				},
				{
					name: 'paint',
					data: '',
					form: <></>
				},
				{
					name: 'default',
					data: '',
					form: defaultForm({valueChanged: (value: string) => {}})
				},
			]
		} as AppState)

	return (
		<>
			<div className='column'>
				<div className='column' style={{ height: '50%' }}>
					<MenuHead appState={state} />
					<Mask appState={state} />
				</div>
				<div className='row' style={{ height: '50%' }}>
					<MaskList appState={state} />
				</div>
			</div>
			<div className='column'>
				<div className='row' style={{ height: '50%' }}>
					<Results appState={state} />
					{defaultForm({valueChanged: (value: string) => {}})}
				</div>
				<div className='row' style={{ height: '50%' }}>
					<Requests appState={state} />
				</div>
			</div>
		</>
	)
}