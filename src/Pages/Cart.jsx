import React, { useEffect, useState } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { URL } from "./Login";
import CartCard from "../Components/CartCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`;

    for (let i of cartItems) {
      axios({
        method: "post",
        url: `${URL}/orders`,
        data: {
          usertoken: i.usertoken,
          productId: i.productId,
          productName: i.productName,
          productImage: i.image,
          productPrice: i.price,
          quantity: i.quantity,
          total: i.total,
          date: formattedDateTime,
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
      );
    }
    navigate("/payment");
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios({
      method: "get",
      url: `${URL}/carts`,
      params: {
        usertoken: token,
      },
    })
      .then((response) => setCartItems(response.data))
      .catch((error) => console.error("Error fetching cart items: ", error));
  }, []);

  // Calculate the total dynamically
  const grandTotal = cartItems
    .filter((item) => !item.checkedOut)
    .reduce((a, c) => (a += c.price * c.quantity), 0)
    .toFixed(2);

  return (
    <center>
      <div>
        <VStack spacing={4} width="100%">
          {cartItems.length > 0 &&
            cartItems
              .filter((item) => !item.checkedOut)
              .map((item) => (
                <Box key={item.id} w="50%">
                  <CartCard
                    {...item}
                    images={item.images}
                    increaseQuantity={() => increaseQuantity(item.id)}
                    decreaseQuantity={() => decreaseQuantity(item.id)}
                  />
                </Box>
              ))}
        </VStack>
        <Text>
          {cartItems?.filter((item) => !item.checkedOut).length > 0 &&
            `Grandtotal: $${grandTotal}`}
        </Text>

        <Button onClick={handleCheckout} colorScheme="teal" mt={4} mb={10}>
          Checkout
        </Button>
      </div>
    </center>
  );
};

export default Cart;
