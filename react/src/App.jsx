
import Grid from "./components/Grid.jsx";
import { useGlobalContext } from "./context.jsx";
import Header from "./layouts/Header.jsx"

const App = () => {

   const { grid } = useGlobalContext()

   return (
      <div className="max-w-6xl mx-auto">

         <Header />
         <Grid />
      </div>
   )
}

export default App
