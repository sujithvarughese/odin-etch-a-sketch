import { useGlobalContext } from "../context.jsx";

const ColorSelect = () => {

	const { setColor } = useGlobalContext()

	return (
		<form className="p-4 flex gap-1">
			<label htmlFor='color'>Color: </label>
			<input type='color' onChange={(e)=>setColor(e.target.value)}/>
		</form>
	);
};

export default ColorSelect;