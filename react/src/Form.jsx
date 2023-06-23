import { useGlobalContext } from "./context.jsx";

const Form = () => {

	const { size, setSize, setColor, setStyles } = useGlobalContext()

	// on submit, grid styles state is updated, which triggers grid re-render (instead of using size which would cause grid to re-render multiple times as user scrolls through grid sizes)
	const handleSubmit = (e) => {
		e.preventDefault()
		setStyles({gridTemplateColumns:`repeat(${size}, 1fr)`, gridTemplateRows:`repeat(${size}, 1fr)`})
	}

	return (
		<div>
			<form>
				<label htmlFor='color'>color</label>
				<input type='color' onChange={(e)=>setColor(e.target.value)}/>
			</form>

			<form onSubmit={handleSubmit}>
				<label htmlFor='size'>size:</label>
				<input type='number' defaultValue='16' min='10' max='100' onChange={(e)=>setSize((e.target.value))}/>
				<button type='submit'>start game</button>
			</form>
		</div>
	);
};

export default Form;