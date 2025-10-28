import Item from '../Item/Item'
import './ItemListContainer.css'
import { getProducts, getProductByCategory } from '../../data/firestore';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';

function ItemListContainer(props) {  
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const { categParam } = useParams();

  useEffect (()=>{ 

    setLoading(true);

    if(categParam){
      getProductByCategory(categParam)    
      .then((productListByCategory) => {
        setTimeout(() => {
          setProducts(productListByCategory)
          setLoading(false);
        }, 1000);
        
      })
      .catch((error) =>{
        alert(`${error} Error al filtrar los productos`)
      })
    }else{
      getProducts()    
      .then((productList) => {
        setTimeout(() => {
          setProducts(productList)
          setLoading(false);
        }, 1000);
      
      })
      .catch((error) =>{
        alert(`${error} Error al cargar los productos`)
      })
    }
  }, [categParam])
  
  
  
  return (
    <div>
      {loading ? (<Loader />):(
      <div className='body-ItemListContainer'>        
        {products.map(product => <Item {...product} key={product.id}/>)}
      </div>)}
    </div>  
  
  )
}
  
export default ItemListContainer
  