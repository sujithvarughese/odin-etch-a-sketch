import Grid from "./components/Grid.jsx";
import Header from "./layouts/Header.jsx"
import Footer from "./layouts/Footer.jsx";
import backgroundIMG from "./assets/AdobeStock_210554360.jpeg"

const App = () => {

   return (
      <div className="background">

         <div className="mx-auto">
            <Header />
            <Grid />
             <div className="md:hidden">
                 <Footer/>
             </div>

         </div>

      </div>
   )
}

export default App
