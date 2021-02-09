import React from "react";

const Cart = ({cart, clearCart ,removeFromCart}) =>{



    const getTotal = () => {
        return cart.reduce((sum,{ cost }) => sum +  cost ,0);
    }
    
    
    return(
        <>
    <h1>Cart</h1>
  
    {cart.length > 0 && (
    <button onClick={clearCart}> clear cart </button>
    )}
    <div className="products">
     {cart.map((product,idx) => (
       <div className="product" key={idx}>
         <h3>{product.name}</h3>
         <h4>{product.cost}</h4>
         <img src =  {product.image}/>
         <button onClick={() => removeFromCart(product)}> Remove</button> 

         
       </div>
     ))}
    </div> 

    <div className="Total">
     
     Total Cost : ${getTotal()}
    
    </div>

    
    </>
    
        
    );
   
   
}

export default Cart;