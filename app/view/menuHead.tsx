import { AppState } from "../app";

export default function MenuHead({appState, showConfig}: {appState: AppState, showConfig: () => void}) {
	return (
		<div style={{display: 'flex', justifyContent: 'space-between', height: '25'}}>
			<h1 style={{}}>Contex Desk</h1>
			<button onClick={showConfig}>Menu</button>
		</div>
	)
}