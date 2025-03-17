import { App } from "../model";


export default function Mask({appState, appEvents}: {appState: App, appEvents: any}) {
	return (
		<>
			<div style={{ display: 'flex', flexDirection: 'column', paddingTop: 1 }}>
				<input type='text' value={appState.systems[appState.currentSystem].name} onChange={(e) => appEvents.nameChanged(e.target.value)} placeholder="system name" />
				<textarea value={appState.systems[appState.currentSystem].definition} onChange={(e) => appEvents.definitionChanged(e.target.value)} rows={4} cols={50} placeholder={'definition'} style={{height: '100%', resize: 'none'}} />
			</div>
		</>
	)
}