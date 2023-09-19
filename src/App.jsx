// import DaisyNav from './components/DaisyNav/DaisyNav'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOption from './components/PriceOptions/PriceOption'

function App() {
  

  return (
    <>
     
     <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <PriceOption></PriceOption>

 
    </>
  )
}

export default App
