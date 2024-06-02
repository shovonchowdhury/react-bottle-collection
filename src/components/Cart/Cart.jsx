import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({purchasedBottles,removeFromCartHandler}) => {
    return (
        <div>
            <h3>Bottles in Cart:{purchasedBottles.length}</h3>
            <div className="cart-container">
                {
                    purchasedBottles.map(bottle=> 
                        <div className='cart-container-container'> 
                            <img key={bottle.id} src={bottle.img}></img>
                            <button onClick={()=>{removeFromCartHandler(bottle.id)}}>Remove</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

Cart.propTypes= {
    purchasedBottles: PropTypes.array.isRequired,
    removeFromCartHandler:PropTypes.func.isRequired
}

export default Cart;