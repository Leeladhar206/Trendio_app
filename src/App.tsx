import './App.css'
import Men from './Pages/Men'
import Navbar from './Components/Navbar'
import MainRoutes from "./Components/MainRoutes"
import Footer from './Components/Footer'
import "./App.css"
import Navbar2 from './Components/Navbar2'
function App() {

  return (
    <>
      <div className='app'>
       {/* <Navbar/> */}
       <Navbar2/>
      <MainRoutes/>
      <Footer/>
      </div>
    </>
  )
}

export default App
