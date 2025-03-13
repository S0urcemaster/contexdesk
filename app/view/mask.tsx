import { AppState } from "../app";

export default function Mask({appState}: {appState: AppState}) {
	return (
		<>
			<h1>Contex Desk</h1>
			{appState.currentMask.form}
		</>
	)
}