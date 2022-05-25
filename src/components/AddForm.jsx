import { useState } from "react"


function AddForm() {

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

  const handleSubmit = (event) => {
    event.preventDefault() // esto previene el comportamiento predeterminado de un formulario
    console.log("haciendo submit", event.target)
    // como actualizamos el estado con esta informacion?
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