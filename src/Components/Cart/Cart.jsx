import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/MyContext';
import { useContext } from "react";
import CartItem from './CartItem/CartItem.jsx';
import img from '../../assets/shoes/empty-cart.jpg';
import './Cart.css';

const Cart = () => {

  const navigate = useNavigate();
  const { cartItems, cartSubTotal} = useContext(Context);

  return (
    <div className="cart">
      {!!cartItems.length && <>
        <div className="cart-heading">
          <div className="cart-heading-text">
            Shopping Cart
          </div>
        </div>

        <div className="cart-content">
          <div className='cart-left'>
            <div className="cart-items">Cart Items</div>
            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} />
            ))}
          </div>

          <div className='cart-right'>
            <div className='cart-summary'>Summary</div>
            <div className='cart-container'>
              <div className='cart-total'>
                <div className="cart-total-content">
                  <div className="cart-subtotal">Subtotal</div>
                  <div className="cart-subtotal-price">{cartSubTotal}</div>
                </div>
              </div>
              <div className='cart-subtotal-description'>
                The subtotal reflects the total price of
                your order, including duties and taxes,
                before any applicable discounts. It does
                not include delivery costs and
                international transaction fees.
              </div>
            </div>

            <button className='checkout-button' onClick={() => { }}>CheckOut</button>
          </div>
        </div>

      </>}

      {
        !cartItems.length && 
        <div className="empty-cart">
          <img src={img} alt="" height={300} width={300} />
          <span className="empty-cart-heading">Your Cart is Empty</span>
          <span className="empty-cart-description">Looks Like you have not added anything in the cart
            <br />
            Go ahead and explore top categories
          </span>
          <button className="continuebutton" onClick={() => navigate("/")}>Continue Shopping</button>
        </div>  
      }  

    </div>
  )
}

export default Cart