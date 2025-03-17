import { App } from "../model";

export default function ModelHead({appState, showConfig}: {appState: App, showConfig: () => void}) {
	return (
		<div style={{display: 'flex', justifyContent: 'space-between', height: 25, overflow: 'hidden'}}>
			<h1 style={{position: 'relative', top: -5, left: -2}}>Model</h1>
			<select>
				<option value="gpt-2">Llama 3</option>
				<option value="gpt-3">Vicuna-13B</option>
				<option value="gpt-4">h2oGPT</option>
			</select>
		</div>
	)
}