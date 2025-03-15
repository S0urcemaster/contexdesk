import { AppState } from "../app";

export default function Mask({appState, appEvents}: {appState: AppState, appEvents: any}) {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<p>Name</p>
				<input type='text' value={appState.systemList[appState.currentSystem].name} onChange={(e) => appEvents.nameChanged(e.target.value)} />
				<p>Description</p>
				<input type='text' value={appState.systemList[appState.currentSystem].description} onChange={(e) => appEvents.descriptionChanged(e.target.value)} />
				<p>Definition</p>
				<textarea value={appState.systemList[appState.currentSystem].definition} onChange={(e) => appEvents.definitionChanged(e.target.value)} rows={4} cols={50} />
			</div>
		</>
	)
}