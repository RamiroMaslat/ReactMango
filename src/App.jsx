import './components/NavBar/NavBar'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {  

  return (
    <div className='body'>
      <header>
        <NavBar/>     
      </header>
      <ItemListContainer greeting = 'Hola, bienvenido a la tienda Mango e-commerce'/>
      
     
    </div>  
 
  )
}

export default App
