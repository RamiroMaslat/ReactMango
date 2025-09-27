import { useParams } from "react-router";
import { getProductById } from "../../data/mockAPI";
import { useState, useEffect } from "react";
import './ItemDetailContainer.css'
import Loader from "../Loader/Loader";


function ItemDetailContainer(props){
    const { productId } = useParams();
    const [ item, setItem ] = useState(null)
    
    useEffect (() => {
        getProductById(productId)
        .then(res => setItem(res))
        .catch((error) =>{
            alert(`${error} Error al cargar los productos`)
        })
    }, [])


    return(
        <div className="itemDetailContainer-body">
            <div className="item-card idc-card">
                { item ? (
                    
                    <>          
                    <h3 className='card-title idc-card__title'>{item.title}</h3>
                    <img className="card-img-top idc-card__img-top"src={item.img} alt="img-product" />
                    <p className='card-price idc-card__price'>Precio: ${item.price}</p>
                    <p className="card-description"> Descripción: {item.description}</p>
                    <div className="buttons-container">
                        <button className='card-button'>-</button>
                        <button className='card-button'>Agregar al Carrito</button>
                        <button className='card-button'>+</button>
                    </div>
                </>
                ):(<Loader />)
            }
            </div>
        </div>
        
    )
}

export default ItemDetailContainer;