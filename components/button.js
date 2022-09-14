import buttonStyle from "./button.module.css";

export default function Button({text}) {
	return (
		<div>
			<button className={`${buttonStyle.button} p-2 hover:bg-yellow-300 rounded border border-black`}>{text}</button>
		</div>
	)
}