import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[cart,setcart]=useState([])

  const products=[
    {id:1,name:"Laptop",price:1000},
    {id:2,name:"Phone",price:500},
    {id:3,name:"Headphones",price:150}
  ]

  function Cart(product){
   const  exsisting=cart.find(item=>item.id==product.id)

    if(exsisting){
      setcart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    }
    
      
    else{
      setcart([...cart,{...product,quantity:1}])
    }

  }
  function removeItem(id){
    setcart(cart.filter(item => item.id !== id))
  }
  function increaseqty(id){
    setcart(cart.map((item)=>
      item.id==id ? {...item,quantity:item.quantity+1}:item
    ))
    
  }

  function decreaseqty(id){
    setcart(cart.map((item)=>
      item.id==id ?{...item,quantity:item.quantity-1}:item).filter(item=>item.quantity>0))
    
    
  }
  const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0)

  
  

  return (
    <div className='container'>
      <h1>Shopping Cart</h1>
      <h2>Products</h2>
      {products.map(p=>(
        <div key={p.id} className='product'>
          <p>{p.name}</p>
          <p>{p.price}</p>
          
          <button onClick={()=>Cart(p)}>Add to cart</button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.length===0 && <p>Cart is empty</p>}

      {cart.map(item=>(
        <div key={item.id} className='cart-item'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div className='qty'>
            <button onClick={()=>increaseqty(item.id)}>+</button>
            <button onClick={()=>decreaseqty(item.id)}>-</button>
          </div>
          <button onClick={()=>removeItem(item.id)}>Deduct</button>
        </div>

      ))}

      <h2>Total:${total}</h2>


    </div>
  )
}

export default App
