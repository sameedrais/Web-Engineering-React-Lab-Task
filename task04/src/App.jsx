import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mobile", price: 500 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Keyboard", price: 80 },
    { id: 5, name: "Monitor", price: 300 }
  ];
  const [search, setsearch] = useState("")

  const filteredproducts=products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase())||
       product.price.toString().includes(search) )

  return (
    <div className='container'>

      <h1>PRODUCT CATALOG</h1>

      <input type='text' placeholder='Search by name or price' value={search} onChange={(e)=>setsearch(e.target.value)} className="search"/>

      <div className='products'>
        {filteredproducts.map((products)=>(
          <div className='card' key={products.id}>
            <h3>{products.name}</h3>
            <p>{products.price}</p>
          </div>

        ))}
      </div>
    </div>
    
  )
}

export default App
