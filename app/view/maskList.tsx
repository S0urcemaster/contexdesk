import { AppState } from "../app";

export default function MaskList ({appState}: {appState: AppState}) {
	return (
		<div>
		{appState.maskList.map((mask, index) => (
			<div key={index}>
				{mask.form}
			</div>
		))}
		</div>
	)
}