import React from "react"

const CartCard = ({ productName, productPrice, quantity, total }) => {
  return (
    <div>
      <p>{productName}</p>
      <p>{productPrice}</p>
      <p>{quantity}</p>
      <p>{total}</p>
    </div>
  )
}

export default CartCard
