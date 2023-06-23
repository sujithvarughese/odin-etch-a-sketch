import {useGlobalContext} from "./context.jsx";

const Form = () => {

	const { size, setSize, setColor, setStyles } = useGlobalContext()

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