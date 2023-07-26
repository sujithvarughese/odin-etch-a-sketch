import { useEffect, useState } from "react";
import {useGlobalContext} from "../context.jsx";

const Square = () => {

	const { color, reset } = useGlobalContext()
	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};
	// state is used for individual square color so not needed in global
	const [squareStyles, setSquareStyles] = useState()

	useEffect(() => {
		setSquareStyles("white")
	},[reset])



	return (
		<div
			className='square'
			style={{backgroundColor: hover ? color : squareStyles}}
			onClick={()=>setSquareStyles(color)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
		</div>
	);
};

export default Square;