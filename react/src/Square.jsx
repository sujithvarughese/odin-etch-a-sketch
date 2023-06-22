import { useState, useEffect } from "react";

const Square = ({ sqID }) => {

	// user can draw and erase as desired
	const [clicked, setClicked] = useState(false)

	// used to dynamically change inline CSS by passing in the color
	const [styles, setStyles] = useState({background: 'white'})

	// re-renders the Box component only when clicked, toggling style from white and color
	useEffect(() => {
		clicked && styles.background === 'white' && setStyles({background: color})
	}, [clicked])


	const handleClick = () => {
		if (clicked && styles?.background === 'white') {

		}
	}


	return (
		<div
			className='square'
			id={sqID}
			style={styles}
			onClick={()=>setClicked(true)}>

		</div>
	);
};

export default Square;