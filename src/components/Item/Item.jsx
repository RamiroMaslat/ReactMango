import './Item.css';
import { Link } from 'react-router';


function Item (props){
    return(
        <div className="item-card">
            <h3 className='card-title'>{props.title}</h3>
            <div className="card-img-top__container">
                <img className="card-img-top"src={props.img} alt="img-product" />
            </div>
            <p className='card-price'>Precio: ${props.price}</p>
            <Link to={`/detail/${props.id}`}>            
                <button className='card-button'>Ver detalles</button>
            </Link>
        </div>
    ) 
}

export default Item;