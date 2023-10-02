import React from "react"

const ProfileOrders = ({ productName, productPrice, quantity, total, productImage }) => {
  // console.log(image)
  return (
    <div>
      <p>{productName}</p>
      <img src={productImage} alt="" />
      <p>{productPrice}</p>
      <p>{quantity}</p>
      <p>{total}</p>
    </div>
  )
}

export default ProfileOrders