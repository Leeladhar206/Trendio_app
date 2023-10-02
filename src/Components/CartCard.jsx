import React from "react"

const CartCard = ({ productName, productPrice, quantity, total, image }) => {
  console.log(image)
  return (
    <div>
      <p>{productName}</p>
      <img src={image} alt="" />
      <p>{productPrice}</p>
      <p>{quantity}</p>
      <p>{total}</p>
    </div>
  )
}

export default CartCard
