import './App.css'
import Footer from './Components/Footer'
import MainRoutes from "./Components/MainRoutes"
import Navbar from './Components/Navbar'




function App() {

  return (
    <>
      <div className='app'>
       <Navbar/>
       <MainRoutes/>
      <Footer/> 
       {/* <Admin/>
     <Men2/> */}
      </div>
    </>
  )
}

export default App
