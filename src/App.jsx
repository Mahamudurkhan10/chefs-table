


import './App.css'
import Banner from './Componets/Header/Banner'
import Navbar from './Componets/Header/Navbar'
import Recipes from './Componets/Recipe/Recipes'



function App() {
  
  return (
    <>
     <div className='container mx-auto' >
          <Navbar></Navbar>
           <Banner></Banner> 
     
      <div  >
      <Recipes  ></Recipes>
        
      </div>
    
      </div>
    </>
    
  )
}

export default App
