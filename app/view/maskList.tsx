import { AppState } from "../app";

export default function MaskList ({appState}: {appState: AppState}) {
	return (
		<>
		{appState.maskList.map((mask, index) => (
			<div key={index}>
				{mask.form}
			</div>
		))}
		</>
	)
}