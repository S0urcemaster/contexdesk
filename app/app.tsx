'use client'
import React, { ReactElement, useState } from 'react';
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
	currentMask: string
	maskList: Mask[]
}

const translateForm = (props: { text: string }) => {
	return <>
		<h2>Translate</h2>
		<input type='text' value={props.text} />
	</>
}

const defaultForm = (props: { text: string }) => {
	return <>
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<p>Text</p>
			<textarea value={props.text} rows={4} cols={50} />
		</div>
	</>
}

export default function App() {

	const [state, setState] = useState(
		{
			currentMask: 'default',
			maskList: [
				{
					name: 'translate',
					data: '',
					form: translateForm
				},
				{
					name: 'paint',
					data: '',
					form: <></>
				},
				{
					name: 'default',
					data: '',
					form: defaultForm
				},
			]
		} as AppState)

	return (
		<>
			<div className='column'>
				<div className='row' style={{ height: '50%' }}>
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
				</div>
				<div className='row' style={{ height: '50%' }}>
					<Requests appState={state} />
				</div>
			</div>
		</>
	)
}