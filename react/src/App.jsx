import Grid from "./components/Grid.jsx";
import Header from "./layouts/Header.jsx"
import backgroundIMG from "./assets/AdobeStock_210554360.jpeg"

const App = () => {

   return (
      <div>
         <img src={backgroundIMG} alt="background"/>
         <div className="max-w-7xl mx-auto">
            <Header />
            <Grid />
         </div>

      </div>
   )
}

export default App
