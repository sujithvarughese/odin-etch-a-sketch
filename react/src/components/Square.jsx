import { useEffect, useState } from "react";
import { useGlobalContext } from "../context.jsx";

const Square = () => {

	const { color, reset } = useGlobalContext()
	// preview color when user mouse hover over square
	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};
	// state is used for individual square color so not needed in global
	const [squareStyles, setSquareStyles] = useState()

	// when reset is triggered, styles on all squares are cleared (set back to white)
	useEffect(() => {
		setSquareStyles("white")
	},[reset])

	return (
		<div
			className='border-2 h-full hover:cursor-crosshair'
			style={{backgroundColor: hover ? color : squareStyles}}
			onClick={()=>setSquareStyles(color)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
		</div>
	);
};

export default Square;