function Cart({cart}){

  return(
    <div className="container">

      <h2>Your Cart</h2>

      {cart.length===0 ? (
        <p>Cart is Empty</p>
      ):(
        cart.map((item,i)=>(
          <div key={i} className="cart-item">
            {item.name} - ${item.price}
          </div>
        ))
      )}

    </div>
  )
}

export default Cart