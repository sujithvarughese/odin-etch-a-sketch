import { ColorSelect } from "../components/index.js";
import { useGlobalContext } from "../context.jsx";
import { useState } from "react";

// options : [change color], [set size and reset]
const Header = () => {

	const { setSize, size, reset, setReset, color } = useGlobalContext()

	// local state which sets when user changes selected size input (before pressing reset)
	const [sizeValue, setSizeValue] = useState(size)

	// -global size state is set to local sizeValue state
	// -toggling reset changes all square colors in Square.jsx to white
	const handleSubmit = (e) => {
		e.preventDefault()
		setSize(sizeValue)
		setReset(!reset)
	}

	return (
		<div className="flex justify-around items-center p-4 bg-transparent">

			<div style={{borderColor: color}} className="hidden md:flex border-4 py-8 bg-neutral-300 rounded-2xl text-2xl font-serif text-white font-bold">
				<ColorSelect />
			</div>


			<div style={{color: color}} className="text-7xl underline font-serif text-white font-extrabold">Sketch!</div>


			<form style={{borderColor: color}} onSubmit={handleSubmit} className="hidden md:flex border-4 p-4 py-5 flex-col gap-4 bg-neutral-300 rounded-2xl">

				<div className="flex gap-2 ">
					<label className="mt-1 text-2xl font-serif text-white font-bold" htmlFor='size'>Size:</label>
					<input className="border-2 p-1" type='number' value={sizeValue} min='10' max='100' onChange={(e)=>setSizeValue((e.target.value))}/>
				</div>

				<div className="m-auto">
					<button style={{backgroundColor: color}} className="btn" type="submit">Reset Game</button>
				</div>

			</form>


		</div>
	);
};

export default Header;