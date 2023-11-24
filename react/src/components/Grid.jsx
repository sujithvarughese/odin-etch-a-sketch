import Square from "./Square.jsx";
import { useGlobalContext } from "../context.jsx";
import { useEffect } from "react";


const Grid = () => {

	const { gridStyle, size, grid, setGrid, setGridStyle, color } = useGlobalContext()

	// temp array is created in order to render grid to screen, then set into global grid state
	// when global size state changes (occurs when user presses reset in Heading.jsx, a new grid array is created)
	useEffect(() => {
		const tempGrid = []
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				tempGrid.push(`${x}-${y}`)
			}
		}
		setGrid(tempGrid)
	}, [size])

	// when new grid array is created (but before render), grid style is set to size global state, then renders new grid
	useEffect(() => {
		setGridStyle({gridTemplateColumns:`repeat(${size}, 1fr)`, gridTemplateRows:`repeat(${size}, 1fr)`, borderColor: 'black'})
	}, [grid])

	useEffect(() => {
		console.log(color);
		setGridStyle({ ...gridStyle, borderColor: color })
	}, [color])

	return (
		<div className="grid border-4 p-1 py-2 my-5 mx-auto" style={gridStyle}>
			{
				grid?.map(square => {
					return (
						<div key={square}>
							<Square />
						</div>
					)
				})
			}
		</div>
	);
};

export default Grid;