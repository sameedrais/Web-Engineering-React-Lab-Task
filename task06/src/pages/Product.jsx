
function Products({addtocart}){

    const products=[
      {id:1,name:"Laptop",price:1000},
      {id:2,name:"Phone",price:500},
      {id:3,name:"Headphones",price:150}
    ]
  
    return(
      <div className="container">
  
        <h2>Products</h2>
  
        <div className="products">
          {products.map((p)=>(
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={()=>addtocart(p)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
  
      </div>
    )
  }
  
  

export default Products

{/* /* here we are updating the parent by using the child component because cart is used in multiple pages
                so it will reside in parent component and parent component have the right to make changes so we are calling
                the parent function in the child component so that we could tell the parent to update this */ }