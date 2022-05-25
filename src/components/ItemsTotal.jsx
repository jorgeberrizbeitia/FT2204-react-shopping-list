

function ItemsTotal(props) {

  const { totalProducts } = props

  const total = totalProducts.reduce((acc, e) => {
      return acc + (e.price * e.qty)
  }, 0)

  return (
    <div>

      {
        totalProducts.map((eachProduct) => {
          return (
            <p>{eachProduct.name} x {eachProduct.qty} : {eachProduct.price * eachProduct.qty}</p>
          )
        })
      }

      <p>Total: {total}</p>
    
    </div>
  )
}

export default ItemsTotal