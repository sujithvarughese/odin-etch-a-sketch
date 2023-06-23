import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ( {children} ) => {

	const [color, setColor] = useState('white')
	const [grid, setGrid] = useState([])
	const [size, setSize] = useState(16)
	const [styles, setStyles] = useState({})

	return (
		<AppContext.Provider value={
			{
				color,
				setColor,
				size,
				setSize,
				grid,
				setGrid,
				styles,
				setStyles
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


