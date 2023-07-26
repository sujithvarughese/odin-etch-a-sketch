import Form from "./Form.jsx";
import Grid from "./components/Grid.jsx";
import { useGlobalContext } from "./context.jsx";

const App = () => {

   const { grid } = useGlobalContext()

   return (
      <div className="max-w-6xl mx-auto p-4">
         <Form />
         { grid.length > 0 && <Grid />}
      </div>
   )
}

export default App
