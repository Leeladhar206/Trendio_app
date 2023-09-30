import './App.css'
import Men from './Pages/Men'
import MainRoutes from "./Components/MainRoutes"
import Footer from './Components/Footer'
import "./App.css"
import Navbar2 from './Components/Navbar2'
import Admin from './Pages/Admin'
import Men2 from './Pages/Men2'
import Women2 from './Pages/Women2'
import Accessories2 from './Pages/Accessories2'


function App() {

  return (
    <>
      <div className='app'>
       <Navbar2/>
       <MainRoutes/>
      <Footer/> 
       {/* <Admin/>
     <Men2/> */}
      </div>
    </>
  )
}

export default App
