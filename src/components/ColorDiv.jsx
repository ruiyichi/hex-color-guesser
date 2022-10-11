const ColorDiv = ({ color }) => {
	return (
		<div
			style={{ 
				backgroundColor: color,
				display: "flex",
				alignSelf: "center",
				alignItems: "center",
				justifyContent: "center",
				height: "50vh",
				width: "50vw",
				margin: "0 auto",
				fontSize: "4em"
			 }}
		>
			Guess my hex!
		</div>
	)
}

export default ColorDiv;