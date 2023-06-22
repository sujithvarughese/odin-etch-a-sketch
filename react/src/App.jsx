import {useState} from "react";
import Square from "./Square.jsx";
import Color from "./Color.jsx";
import {nanoid} from "nanoid";

const App = () => {

   const [grid, setGrid] = useState([])
   const [size, setSize] = useState(16)
   const [styles, setStyles] = useState({})

   const createGrid = size => {
      const tempGrid = []
      for (let x = 0; x < size; x++) {
         for (let y = 0; y < size; y++) {
            tempGrid.push(`${x}-${y}`)
         }
      }
      setGrid(tempGrid)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      setStyles({gridTemplateColumns:`repeat(${size}, 1fr)`, gridTemplateRows:`repeat(${size}, 1fr)`})
      createGrid(size)
   }

   console.log('rendering...')

   return (
      <>
      <Color />
      <form onSubmit={handleSubmit}>
         <label htmlFor='size'>size:</label>
         <input type='number' id='size' min='10' max='100' onChange={(e)=>setSize((e.target.value))}/>
         <button type='submit'>start game</button>
      </form>

      <div className='board-grid' style={styles}>
        {
          grid.map(square => {
            const id = nanoid()
            return (
               <div key={id}>
                 <Square sqID={square}/>
               </div>
            )
          })
        }
      </div>

    </>
  )
}

export default App
