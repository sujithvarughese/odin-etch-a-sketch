import { useState, useEffect } from "react";
import {useGlobalContext} from "./context.jsx";

const Square = () => {

	const { color } = useGlobalContext()

	const [squareStyles, setSquareStyles] = useState()


	return (
		<div
			className='square'
			style={{background: squareStyles}}
			onClick={()=>setSquareStyles(color)}>
XY
		</div>
	);
};

export default Square;