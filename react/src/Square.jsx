import { useState } from "react";
import {useGlobalContext} from "./context.jsx";

const Square = () => {

	const { color } = useGlobalContext()

	// state is used for individual square color so not needed in global
	const [squareStyles, setSquareStyles] = useState()


	return (
		<div
			className='square'
			style={{background: squareStyles}}
			onClick={()=>setSquareStyles(color)}>
		</div>
	);
};

export default Square;