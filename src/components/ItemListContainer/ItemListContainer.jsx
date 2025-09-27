import Item from '../Item/Item'
import './ItemListContainer.css'
import getProducts, { getProductByCategory } from '../../data/mockAPI'
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';

function ItemListContainer(props) {  
  
  const [products, setProducts] = useState([])
  const { categParam } = useParams();

  useEffect (()=>{ 

    if(categParam){
      getProductByCategory(categParam)    
      .then((productListByCategory) => {
        setProducts(productListByCategory)
      })
      .catch((error) =>{
        alert(`${error} Error al filtrar los productos`)
      })
    }else{
      getProducts()    
      .then((productList) => {
      setProducts(productList)
      })
      .catch((error) =>{
        alert(`${error} Error al cargar los productos`)
      })
    }
  }, [categParam])
  
  
  
  return (
    <div>
      {products.length === 0 ? (<Loader />):""}
      <div className='body-ItemListContainer'>        
        {products.map(product => <Item {...product} key={product.id}/>)}
      </div>
    </div>  
  
  )
}
  
export default ItemListContainer
  