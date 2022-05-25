import { useState } from "react"

function Item(props) {

  const [qty, setQty] = useState(0)

  const { name, price } = props.eachProductProp

  const handleChange = (event) => setQty(event.target.value)

  const handleClick = () => {
    console.log( name, price, qty )
    const theProduct = {
      name,
      price, 
      qty
    }
    props.addProductTotal(theProduct)
  }

  return (
    <div>
      <span>{name} : {price}$</span>
      <input type="number" name="qty" onChange={handleChange} value={qty}/>
      <button onClick={handleClick}>Agregar</button>
    </div>
  )
}

export default Item