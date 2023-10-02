import axios from "axios"
import React, { useEffect, useState } from "react"
import { URL } from "./Login"
import CartCard from "../Components/CartCard"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  //   const [addCounter, setAddCounter] = useState(0)
  const navigate = useNavigate()

  const handleCheckout = () => {
    for (let i of cartItems) {
      axios({
        method: "post",
        url: `${URL}/orders`,
        data: {
          usertoken: i.usertoken,
          productId: i.productId,
          productName: i.productName,
          productPrice: i.price,
          quantity: i.quantity,
          total: i.total,
          date: Date.now(),
          orderStatus: "placed",
        },
      }).then((r) =>
        axios({
          method: "patch",
          url: `${URL}/carts/${i.id}`,
          data: {
            checkedOut: true,
          },
        })
      )
    }
    navigate("/payments")
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios({
      method: "get",
      url: `${URL}/carts`,
      params: {
        usertoken: token,
      },
    }).then((response) => setCartItems(response.data))
  }, [])
  return (
    <div>
      {cartItems.length > 0 &&
        cartItems
          .filter((item) => item.checkedOut === false)
          .map((item) => <CartCard key={item.id} {...item} />)}

      <p>
        {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
          "Grandtotal: "}
        {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
          cartItems
            .filter((item) => item.checkedOut === false)
            .reduce((a, c) => (a += c.total), 0)}
      </p>

      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default Cart
