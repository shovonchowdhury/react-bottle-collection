import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle,addToCartHandler}) => {

    const {name,img,price}=bottle;

    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>Price:<b>${price}</b></p>
            <button onClick={()=>addToCartHandler(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle:PropTypes.object,
    addToCartHandler: PropTypes.func,
        
    
}

export default Bottle;