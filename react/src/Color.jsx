import {useState} from "react";

const Color = () => {

	const [color, setColor] = useState('black')

	return (
		<div>
			<form>
				<label htmlFor='color'>color</label>
				<input type='color' onChange={(e)=>setColor(e.target.value)}/>
			</form>
		</div>
	);
};

export default Color;