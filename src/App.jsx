import './components/NavBar/NavBar'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'




function App() {  
  return (

    <div className='body'>
      <BrowserRouter>
        <header>
          <NavBar/>     
        </header>    
          
        <Routes>
          <Route path='/' element={<ItemListContainer greeting = 'Hola, bienvenido a la tienda Mango e-commerce'/>}></Route>
          <Route path='category/:categParam' element={<ItemListContainer greeting = 'categoria'/>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
          <Route path='*' element={<p className='err-route'>Oops! Al parecer hubo un error, inténtalo más tarde</p>}></Route>
        </Routes>
        
        <footer>
          <Footer/>
        </footer>      
      </BrowserRouter>
     
    </div>  
 
  )
}

export default App
