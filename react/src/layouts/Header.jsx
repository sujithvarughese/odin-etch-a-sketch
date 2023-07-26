import { ColorSelect } from "../components/index.js";
import { useGlobalContext } from "../context.jsx";
import { useState } from "react";

// options : [change color], [set size and reset]
const Header = () => {

	const { setSize, size, reset, setReset } = useGlobalContext()

	// local state which sets when user changes selected size input (before pressing reset)
	const [sizeValue, setSizeValue] = useState(size)

	// -global size state is set to local sizeValue state
	// -reset changes all square colors in Square.jsx to white
	const handleSubmit = (e) => {
		e.preventDefault()
		setSize(sizeValue)
		setReset(!reset)
	}

	return (
		<div className="flex justify-around items-center p-4">

			<div className="text-xl">
				<ColorSelect />
			</div>


			<div className="text-3xl">Etch A Sketch!</div>


			<form onSubmit={handleSubmit} className="p-4 flex flex-col">
				<div>
					<label htmlFor='size'>size:</label>
					<input className="border-2" type='number' value={sizeValue} min='10' max='100' onChange={(e)=>setSizeValue((e.target.value))}/>
				</div>
				<div>
					<button type="submit">reset game</button>
				</div>

			</form>


		</div>
	);
};

export default Header;