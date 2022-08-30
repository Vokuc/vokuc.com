import buttonStyle from "./button.module.css";

export default function Button({text}) {
	return (
		<div>
			<button className={buttonStyle.button}>{text}</button>
		</div>
	)
}