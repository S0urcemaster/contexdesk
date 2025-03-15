'use client'
import React, { ReactElement, useEffect, useState } from 'react';
import System from './view/mask';
import Results from './view/results';
import Requests from './view/requests';
import MenuHead from './view/menuHead';
import MaskList from './view/maskList';
import Mask from './view/mask';

export type System = {
	name: string
	description: string
	definition: string
}

export type Request = {
	system: System
	currentRequest: number
	requests: string[]
}

export type AppState = {
	currentSystem: number
	systemList: System[]
}

export default function App() {
	const translateForm = () => {
		const [text, setText] = useState('')
		return <>
			<h2>Translate</h2>
			<input type='text' value={text} onChange={event => setText(event.target.value)} />
		</>
	}

	const defaultForm = ({ valueChanged }: { valueChanged: (value: string) => void }) => {
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

	const appState: AppState = {
		currentSystem: 0,
		systemList: [
			{
				name: 'default',
				description: 'default',
				definition: 'default'
			}]
	}

	const [state, setState] = useState(appState)

	const [name, setName] = useState('default')
	const [description, setDescription] = useState('')
	const [definition, setDefinition] = useState('default')
	const [request, setRequest] = useState('')

	const events = {
		nameChanged: (value: string) => {
			setName(value)
			state.systemList[state.currentSystem].name = value
			setState({...state})
		},
		descriptionChanged: (value: string) => {
			setDescription(value)
		},
		definitionChanged: (value: string) => {
			setDefinition(value)
		},
		requestChanged: (value: string) => {
			setRequest(value)
		}
	}

	return (
		<>
			<div className='column'>
				<div className='column' style={{ height: '50%', padding: '5px' }}>
					<MenuHead appState={state} showConfig={() => setName('config')} />
					<Mask appState={state} appEvents={events} />
				</div>
				<div className='row' style={{ height: '50%' }}>
					<MaskList appState={state} />
				</div>
			</div>
			<div className='column'>
				<div className='row' style={{ height: '50%' }}>
					<Results appState={state} />
					{defaultForm({ valueChanged: (value: string) => { } })}
				</div>
				<div className='row' style={{ height: '50%' }}>
					<Requests appState={state} />
				</div>
			</div>
		</>
	)
}