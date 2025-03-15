import { AppState } from "../app"

export default function MaskList ({appState}: {appState: AppState}) {
	return (
		<div>
		{appState.systemList.map((system, index) => (
			<div key={index}>
				{system.name}
			</div>
		))}
		</div>
	)
}