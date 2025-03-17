import { App } from "../model";


export default function Results({ appState, appEvents }: { appState: App, appEvents: any }) {

	return (
		<div style={{ display: 'flex', flexDirection: 'column', paddingTop: 1 }}>
			<input type='text' value={appState.systems[appState.currentSystem].name} onChange={(e) => appEvents.nameChanged(e.target.value)} placeholder="request" />
			<textarea value={appState.systems[appState.currentSystem].definition} onChange={(e) => appEvents.definitionChanged(e.target.value)} rows={4} cols={50} placeholder={'response'} style={{ height: '100%', resize: 'none' }} />
		</div>
	)
}