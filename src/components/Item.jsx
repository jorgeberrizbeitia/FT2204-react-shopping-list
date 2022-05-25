
const testProducts = [
  { name: "Agua", price: 1 },
  { name: "Conga", price: 20 },
  { name: "Videojuego", price: 10 }
]

function Item(props) {

  // state

  const { name, price } = props.eachProductProp

  return (
    <div>{name} : {price}$</div>
  )
}

export default Item