import { useState } from "react"


function AddForm(props) {

  // const { addProduct } = props
  //          ref

  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    let input = event.target.value
    if (input === "banana") {
      input = "NO DEBES USAR BANANA"
    }
    setName(input)
  }

  const handlePriceChange = (event) => setPrice(event.target.value)

  // para dinamicamente controlar formularios muy grandes
  // const [ form, setForm ] = useState({
  //   name: "",
  //   price: 0
  // })

  // const handleChange = (event) => {
  //   const formCopy = {...form}
  //   formCopy[event.target.name] = event.target.value
  //   setForm( formCopy )
  // }

  const handleSubmit = (event) => {
    event.preventDefault() // esto previene el comportamiento predeterminado de un formulario
    console.log("haciendo submit")
    const newProduct = {
      name,
      price
    }
    setName("")
    setPrice(0)
    props.addProduct(newProduct)
    // lifting the state up
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" onChange={handleNameChange} value={name}/>

        <label htmlFor="price">Precio:</label>
        <input type="number" name="price" onChange={handlePriceChange} value={price}/>

        <button>Agregar</button>

      </form>
    
    </div>
  )
}

export default AddForm