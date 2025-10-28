import './components/NavBar/NavBar'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CartContextProvider } from './components/context/cartContext'








function App() {  
  
  return (

    <div className='body'>
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar/>     
          </header>  
           
            
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = 'Hola, bienvenido a la tienda Mango e-commerce'/>}></Route>
            <Route path='category/:categParam' element={<ItemListContainer category = 'categoria'/>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<CartContainer />}></Route>
            <Route path='*' element={<p className='err-route'>Oops! Al parecer hubo un error, inténtalo más tarde</p>}></Route>
          </Routes>
          
          <footer>
            <Footer/>
          </footer>      
        </BrowserRouter>
      </CartContextProvider>
     
    </div>  
 
  )
}


export default App
