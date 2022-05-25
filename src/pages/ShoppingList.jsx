import AddForm from "../components/AddForm"
import Item from "../components/Item"
import Search from "../components/Search"
import { useState } from "react"
import ItemsTotal from "../components/ItemsTotal"

// esto podria ser un json
const testProducts = [
  { name: "Agua", price: 1 },
  { name: "Conga", price: 20 },
  { name: "Videojuego", price: 10 }
]

function ShoppingList() {

  const [ products, setProducts ] = useState(testProducts) // .todos los elementos
  const [ productsToDisplay, setProductsToDisplay ] = useState(testProducts)
  const [ showForm, setShowForm ] = useState(false)
  const [ totalProducts, setTotalProducts ] = useState([])

  function addProduct(ProductToAdd) {
    console.log(ProductToAdd)

    // ...aqui voy a agregar el item a products
    // products.push(ProductToAdd) // si estamos el estado..
    // const productsCopy = [...products]
    // productsCopy.push(ProductToAdd)

    const newArr = [...products, ProductToAdd ]
    setShowForm(false)
    setProducts(newArr) // => products es igual a newArr 
    setProductsToDisplay(newArr)

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
      return eachProd.name.toUpperCase().includes(search.toUpperCase())
    })

    // console.log(filteredArr)
    setProductsToDisplay(filteredArr)
  }

  const addProductTotal = (theProduct) => {
    console.log(theProduct)
    setTotalProducts([...totalProducts, theProduct])
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
          productsToDisplay.map((eachProduct, index) => {
            return (
              <Item 
                key={eachProduct.name + index} 
                eachProductProp={eachProduct} 
                addProductTotal={addProductTotal} 
              />
            )
          })
        }
        
        <hr />

        <ItemsTotal totalProducts={totalProducts}/>

    
    </div>
  )
}

export default ShoppingList