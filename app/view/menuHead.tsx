import { App } from "../model";

export default function MenuHead({appState, showConfig}: {appState: App, showConfig: () => void}) {
	return (
		<div style={{display: 'flex', justifyContent: 'space-between', height: 25, overflow: 'hidden'}}>
			<h1 style={{position: 'relative', top: -5, left: -2}}>Contex Desk</h1>
			<button onClick={showConfig}>Menu</button>
		</div>
	)
}