import React, { ReactElement, useState } from 'react';
import Mask from './view/mask';
import Masks from './view/masks';
import Results from './view/results';
import Requests from './view/requests';

type MaskData = string

type Mask = {
	name: string
	data: MaskData
	form: ReactElement
}

export type AppState = {
	// const currentMask
	masks: Mask[]
}

const translateForm = (props: {text: string}) => {
	return <>
		<h2>Translate</h2>
		<input type="text" value={props.text} />
	</>
}

const initialAppState: AppState = {
	masks: [
		{
			name: 'translate',
			data: '',
			form: <></>
		},
		{
			name: 'paint',
			data: '',
			form: <></>
		},
		{
			name: '',
			data: '',
			form: <></>
		},
	]
}

export default function App() {

	const [state, setState] = useState(initialAppState)

	return (
		<>
		<div className="column">
                <div className="row" style={{ height: "50%" }}>
					<Mask appState={state} />
                </div>
                <div className="row" style={{ height: "50%" }}>
					<Masks />
				</div>
            </div>
            <div className="column">
                <div className="row" style={{ height: "50%" }}>
					<Results />
				</div>
                <div className="row" style={{ height: "50%" }}>
					<Requests />
				</div>
            </div>
		</>
	)
}