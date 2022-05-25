import AddForm from "../components/AddForm"
import Item from "../components/Item"
import Search from "../components/Search"
import { useState } from "react"

// esto podria ser un json
const testProducts = [
  { name: "Agua", price: 1 },
  { name: "Conga", price: 20 },
  { name: "Videojuego", price: 10 }
]

function ShoppingList() {

  const [ products, setProducts ] = useState(testProducts)

  function addProduct(ProductToAdd) {
    console.log(ProductToAdd)

    // ...aqui voy a agregar el item a products
    // products.push(ProductToAdd) // si estamos el estado..
    const productsCopy = [...products]
    productsCopy.push(ProductToAdd)
    setProducts([...products, ProductToAdd ])
  }

  return (
    <div>

        <h1>Mi Lista de compras</h1>
    
        <AddForm addProduct={addProduct}/>

        <Search />

        {
          products.map((eachProduct, index) => {
            return (
              <Item key={eachProduct.name + index} eachProductProp={eachProduct}/>
            )
          })
        }
        
    
    </div>
  )
}

export default ShoppingList