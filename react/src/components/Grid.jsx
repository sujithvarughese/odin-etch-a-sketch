import Square from "./Square.jsx";
import {useGlobalContext} from "../context.jsx";
import {useEffect} from "react";


const Grid = () => {

	const { grid, setGrid, styles, size } = useGlobalContext()

	// styles changes upon start game; when start game -> new grid rendered
	useEffect(() => {
		const tempGrid = []
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				tempGrid.push(`${x}-${y}`)
			}
		}
		setGrid(tempGrid)
	}, [styles])

	return (
		<div className="board-grid" style={styles}>
			{
				grid.map(square => {
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