import classNames from "classnames"
import { random_hex } from "../App"
import { useEffect, useState } from "react";

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

const ColorButton = ({ fade, onClick, onTransitionEnd, color_choice }) => {
	return (
		<button
			className={classNames({
				colorbutton: true,
			})}
			style={{ backgroundColor: fade ? color_choice : "#ffffff" }}
			onClick={() => onClick(color_choice)}
			onTransitionEnd={onTransitionEnd}
			tabIndex={0}
		>
			{color_choice}
		</button>
	)
}

const ColorButtons = ({ color, setColor }) => {
	const [fade, setFade] = useState(false)
	const [colorChoices, setColorChoices] = useState([color, random_hex(), random_hex()])
	const [guessText, setGuessText] = useState("")

	useEffect(() => {
		let color_choices = [color, random_hex(), random_hex()]
		shuffleArray(color_choices)
		setColorChoices(color_choices)
	}, [color])

	const onClick = (color_choice) => {
		setFade(true)
		setGuessText(color_choice === color ? "Correct" : "Incorrect")
		setTimeout(() => setColor(random_hex()), 1300)
	}

	const onTransitionEnd = () => setFade(false)

	return (
		<div
		>
			<div
				style={{
					display: "flex",
					alignContent: "center",
					alignItems: "center",
					alignSelf: "center",
					justifyContent: "center",
					gap: "5vw",
					marginTop: "1vh"
				}}
			>
			{colorChoices.map((choice, idx) => {
				return (
					<ColorButton 
						key={idx} 
						fade={fade}
						color_choice={choice} 
						onClick={onClick}
						onTransitionEnd={onTransitionEnd}
					/>
				)
			})}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "1vh",
					fontSize: "2em",
					color: guessText === "Correct" ? "green" : "red"
				}}
			>
				{guessText}
			</div>
		</div>
	)
}

export default ColorButtons