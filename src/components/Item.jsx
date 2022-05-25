

function Item(props) {

  // state

  const { name, price } = props.eachProductProp

  return (
    <div>{name} : {price}$</div>
  )
}

export default Item