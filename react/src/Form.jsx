import { useGlobalContext } from "./context.jsx";

const Form = () => {

	const { size, setSize, setColor, setStyles, reset, setReset } = useGlobalContext()

	// on submit, grid styles state is updated, which triggers grid re-render (instead of using size which would cause grid to re-render multiple times as user scrolls through grid sizes)
	const handleSubmit = (e) => {
		e.preventDefault()
		setStyles({gridTemplateColumns:`repeat(${size}, 1fr)`, gridTemplateRows:`repeat(${size}, 1fr)`})
	}



	return (
		<div className="text-3xl flex justify-around">

			<form className="p-4">
				<label htmlFor='color'>color</label>
				<input type='color' onChange={(e)=>setColor(e.target.value)}/>
			</form>

			<form onSubmit={handleSubmit} className="p-4">
				<label htmlFor='size'>size:</label>
				<input type='number' defaultValue='16' min='10' max='100' onChange={(e)=>setSize((e.target.value))}/>
				<button type='submit'>start game</button>
			</form>

			<button onClick={()=>setReset(!reset)}>reset game</button>

		</div>
	);
};

export default Form;