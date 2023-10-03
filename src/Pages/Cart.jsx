// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import { URL } from "./Login"
// import CartCard from "../Components/CartCard"
// import { useNavigate } from "react-router-dom"

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([])
//   //   const [addCounter, setAddCounter] = useState(0)
//   const navigate = useNavigate()

//   const handleCheckout = () => {
//     for (let i of cartItems) {
//       axios({
//         method: "post",
//         url: `${URL}/orders`,
//         data: {
//           usertoken: i.usertoken,
//           productId: i.productId,
//           productImage: i.image,
//           productName: i.productName,
//           productPrice: i.price,
//           quantity: i.quantity,
//           total: i.total,
//           date: Date.now(),
//           orderStatus: "placed",
//         },
//       }).then((r) =>
//         axios({
//           method: "patch",
//           url: `${URL}/carts/${i.id}`,
//           data: {
//             checkedOut: true,
//           },
//         })
//       )
//     }
//     navigate("/payments")
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     axios({
//       method: "get",
//       url: `${URL}/carts`,
//       params: {
//         usertoken: token,
//       },
//     }).then((response) => setCartItems(response.data))
//   }, [])
//   return (
//     <div>
//       {cartItems.length > 0 &&
//         cartItems
//           .filter((item) => item.checkedOut === false)
//           .map((item) => <CartCard key={item.id} {...item} />)}

//       <p>
//         {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
//           "Grandtotal: "}
//         {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
//           cartItems
//             .filter((item) => item.checkedOut === false)
//             .reduce((a, c) => (a += c.total), 0)}
//       </p>

//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   )
// }

// export default Cart
// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import { URL } from "./Login"
// import CartCard from "../Components/CartCard"
// import { useNavigate } from "react-router-dom"

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([])
//   //   const [addCounter, setAddCounter] = useState(0)
//   const navigate = useNavigate()

//   const handleCheckout = () => {
//     for (let i of cartItems) {
//       axios({
//         method: "post",
//         url: `${URL}/orders`,
//         data: {
//           usertoken: i.usertoken,
//           productId: i.productId,
//           productName: i.productName,
//           productPrice: i.price,
//           quantity: i.quantity,
//           total: i.total,
//           date: Date.now(),
//           orderStatus: "placed",
//         },
//       }).then((r) =>
//         axios({
//           method: "patch",
//           url: `${URL}/carts/${i.id}`,
//           data: {
//             checkedOut: true,
//           },
//         })
//       )
//     }
//     navigate("/payments")
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     axios({
//       method: "get",
//       url: `${URL}/carts`,
//       params: {
//         usertoken: token,
//       },
//     }).then((response) => setCartItems(response.data))
//   }, [])
//   return (
//     <div>
//       {cartItems.length > 0 &&
//         cartItems
//           .filter((item) => item.checkedOut === false)
//           .map((item) => <CartCard key={item.id} {...item} />)}

//       <p>
//         {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
//           "Grandtotal: "}
//         {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
//           cartItems
//             .filter((item) => item.checkedOut === false)
//             .reduce((a, c) => (a += c.total), 0)}
//       </p>

//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   )
// }

// export default Cart
import React, { useEffect, useState } from "react";
import { Box, Button, Text,VStack } from "@chakra-ui/react";
import axios from "axios";
import { URL } from "./Login";
import CartCard from "../Components/CartCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

 
  const handleCheckout = () => {
    


    for (let i of cartItems) {
      axios({
        method: "post",
        url: `${URL}/orders`,
        data: {
          usertoken: i.usertoken,
          productId: i.productId,
          productName: i.productName,
          productImage:i.image,
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
    navigate("/payment")
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios({
      method: "get",
      url: `${URL}/carts`,
      params: {
        usertoken: token,
      },
    }).then((response) => setCartItems(response.data));
  }, []);

  return (
     <center>
    <div>
     <VStack  spacing={4}  width="100%"> 
        {cartItems.length > 0 &&
          cartItems
            .filter((item) => item.checkedOut === false)
            .map((item) => (
              <Box key={item.id} w="50%" > 
                <CartCard {...item} images={item.images} />
              </Box>
            ))}
      </VStack>
      <Text>
        {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
          "Grandtotal : $"}
        {cartItems?.filter((item) => item.checkedOut === false).length > 0 &&
          cartItems
          .filter((item) => item.checkedOut === false)
          .reduce((a, c) => (a += c.total), 0).toFixed(2)}
          
      </Text>

      <Button onClick={handleCheckout} colorScheme="teal" mt={4}>
        Checkout
      </Button>
    </div>
          </center>
  );
};

export default Cart;

