import { RiDeleteBin6Line } from "react-icons/ri";
import { Context } from '../../../Context/MyContext';
import { useContext } from "react";
import './CartItem.css';


const CartItem = ({ cartItem }) => {

  const { removeFromCart } = useContext(Context);
  
  return (
  <div className="cartItem">
     <div className="cartItem-image">
        <img src={cartItem.thumbnail} alt="cartItem"/>
     </div>

     <div className="cartItem-content">
       <div className="cartItem-div">
         <div className="cartItem-title">
           {cartItem.title}
         </div>
         <div className="cartItem-subtitle">
           MRP: RS {cartItem.price}
         </div>
       </div>
       <div>
        {cartItem.subtitle}
       </div>

       <div className="shoe-size-quantity">
         <div className="shoe-size-container">
           <div className="shoe-sizes">
             <div className="shoe-sizes-text"> Size: </div>
             <select>
               {cartItem.sizes.data.map((item) => (
                  <option value="1">{item.size}</option>
               ))}
             </select>
           </div>
           <div className="shoe-quantity">
             <div className="shoe-quantity-text">Quantity: </div>
             <select>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
             </select>
           </div>
         </div>

         <div className="delete-icon" onClick={() => removeFromCart(cartItem)}>
           <RiDeleteBin6Line size={20}/>
         </div>

       </div>

     </div>

  </div>
  );
}

export default CartItem;