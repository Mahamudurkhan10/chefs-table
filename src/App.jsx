
import './App.css'
import Banner from './Componets/Header/Banner'
import Navbar from './Componets/Header/Navbar'
import Recipes from './Componets/Recipe/Recipes'
import Cook from './Componets/WantCook/Cook'

function App() {
 

  return (
    <>
     <div className='container mx-auto' >
          <Navbar></Navbar>
           <Banner></Banner> 
     
      <div className='grid grid-cols-2 gap-11'>
      <Recipes></Recipes>
      <Cook></Cook>
      </div>
      </div>
    </>
    
  )
}

export default App
