import './App.css'
import Men from './Pages/Men'
import MainRoutes from "./Components/MainRoutes"
import Footer from './Components/Footer'
import "./App.css"
import Navbar2 from './Components/Navbar2'
import Admin from './Pages/Admin'


function App() {

  return (
    <>
      <div className='app'>
       <Navbar2/>
       <MainRoutes/>
      <Footer/>
      {/* <Admin/> */}
      </div>
    </>
  )
}

export default App
