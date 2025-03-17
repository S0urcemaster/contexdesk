'use client'
import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import Results from './view/results';
import Requests from './view/requests';
import MenuHead from './view/menuHead';
import MaskList from './view/maskList';
import Mask from './view/mask';
import { emptyModel } from './model';
import ModelHead from './view/modelHead';

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

	const [state, setState] = useState(emptyModel)

	const [name, setName] = useState('default')
	const [description, setDescription] = useState('')
	const [definition, setDefinition] = useState('default')
	const [request, setRequest] = useState('')

	const events = {
		nameChanged: (value: string) => {
			setName(value)
			state.systems[state.currentSystem].name = value
			setState({ ...state })
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

	const columnStyle: CSSProperties = {
		flex: 1,
		display: 'flex',
		flexDirection: 'column'
	}

	const rowStyle: CSSProperties = {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid #ccc',
		overflow: 'auto',
		minHeight: 50
	}

	return (
		<>
			<div style={{display: 'grid', gridTemplateRows: '3fr 1fr'}}>
				<div style={{display: 'grid', gridTemplateRows: '1fr 0fr', padding: 5, backgroundColor: '#25597C'}}>
					<Mask appState={state} appEvents={events} />
					<MenuHead appState={state} showConfig={() => setName('config')} />
				</div>
				<div style={{marginTop: 1, backgroundColor: '#25597C'}}>
					<MaskList appState={state} />
				</div>
			</div>
			<div style={{display: 'grid', gridTemplateRows: '3fr 1fr', paddingLeft: 1}}>
				<div style={{display: 'grid', gridTemplateRows: '1fr 0fr', padding: 5, backgroundColor: '#25597C'}}>
					<Results appState={state} appEvents={events} />
					<ModelHead appState={state} showConfig={() => setName('config')} />
				</div>
				<div style={{display: 'grid', gridTemplateRows: '0fr 1fr', padding: 5, backgroundColor: '#25597C', marginTop: 1}}>
					<Requests appState={state} />
				</div>
			</div>
		</>
	)
}