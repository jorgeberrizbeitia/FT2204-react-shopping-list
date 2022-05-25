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

  const [ products, setProducts ] = useState(testProducts) // .todos los elementos
  const [ filteredProducts, setFilteredProducts ] = useState(testProducts)
  const [ showForm, setShowForm ] = useState(false)

  function addProduct(ProductToAdd) {
    console.log(ProductToAdd)

    // ...aqui voy a agregar el item a products
    // products.push(ProductToAdd) // si estamos el estado..
    // const productsCopy = [...products]
    // productsCopy.push(ProductToAdd)

    const newArr = [...products, ProductToAdd ]
    setShowForm(false)
    setProducts(newArr) // => products es igual a newArr 
    setFilteredProducts(newArr)

  }

  const handleShowForm = () => {
    // if (showForm === true) {
    //   setShowForm(false)
    // } else {
    //   setShowForm(true)
    // }
    setShowForm(!showForm)
  }

  const searchList = (search) => {
    console.log(search)
    // solo mostrar los elementos que concuerden con el str search

    const filteredArr = products.filter((eachProd) => {
      return eachProd.name.includes(search)
    })

    // console.log(filteredArr)
    setFilteredProducts(filteredArr)
  }

  return (
    <div>

        <h1>Mi Lista de compras</h1>
    
        <button onClick={handleShowForm}>Ver formulario</button>
        
        {/* { showForm === true ? <AddForm addProduct={addProduct}/> : null} */}
        { showForm === true && <AddForm addProduct={addProduct}/> }

        <hr />

        <Search searchList={searchList}/>

        <hr />

        {
          filteredProducts.map((eachProduct, index) => {
            return (
              <Item key={eachProduct.name + index} eachProductProp={eachProduct}/>
            )
          })
        }
        
    
    </div>
  )
}

export default ShoppingList