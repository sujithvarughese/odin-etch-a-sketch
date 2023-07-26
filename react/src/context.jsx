import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ( {children} ) => {

	const [color, setColor] = useState('black')
	const [size, setSize] = useState(16)
	const [gridStyle, setGridStyle] = useState({gridTemplateColumns:`repeat(${size}, 1fr)`, gridTemplateRows:`repeat(${size}, 1fr)`})
	const [reset, setReset] = useState(false)
	const [grid, setGrid] = useState([])

	// -from Heading.jsx
	// -when styles changes, useEffect in Grid.jsx is triggered which will set a new grid state based on the size selected by user
	// -when reset is triggered, the reset state is changed, triggering the useEffect in Square.jsx, setting the local state to "white"- essentially clearing the board

	return (
		<AppContext.Provider value={
			{
				color,
				setColor,
				size,
				setSize,
				gridStyle,
				setGridStyle,
				reset,
				setReset,
				grid,
				setGrid
			}
		}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { useGlobalContext, AppProvider };


