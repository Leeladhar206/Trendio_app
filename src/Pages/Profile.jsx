
import React, { useEffect, useState } from "react"
import { Box, Heading, Button } from "@chakra-ui/react"
import axios from "axios"
import { URL } from "./Login"
import { useNavigate } from "react-router-dom"
import CartCard from "../Components/CartCard"


const Profile = () => {
  const token = localStorage.getItem("token") || ""
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  const [pendingOrders, setPendingOrders] = useState([])
  const [recentOrders, setRecentOrders] = useState([])

  useEffect(() => {
    if (token) {
      axios({
        method: "get",
        url: `${URL}/users`,
        params: {
          token,
        },
      })
        .then((response) => {
          const userData = response.data[0]
          if (userData) {
            setUserData(userData)
          }
        })
        .catch((error) => console.log(error))

      axios({
        method: "get",
        url: `${URL}/orders`,
        params: {
          usertoken: token,
        },
      }).then((response) => {
        setPendingOrders(
          response.data.filter(
            (item) =>
              item.orderStatus === "placed" || item.orderStatus === "shipped"
          )
        )
        setRecentOrders(
          response.data.filter(
            (item) =>
              item.orderStatus === "delivered" ||
              item.orderStatus === "cancelled"
          )
        )
      })
    }
  }, [token])

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <Box
      maxW="400px"
      mx="auto"
      p="4"
      bg="gray.100"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading as="h1" textAlign="center" mb="4">
        Profile
      </Heading>
      {userData && (
        <Box textAlign="center">
          <p className="welcome-text">Welcome, {userData.f_name}!</p>


          <Button colorScheme="red" size="md" mt="4" onClick={logout}>

         <Box padding={3}>
         <Link  to="/admin"> Admin Dashboard </Link>
          </Box>
          <Button
            colorScheme="red"
            size="md"
            mt="4"
            onClick={logout}
          >

            Logout
          </Button>
        </Box>
      )}
      <h1>Pending Orders</h1>
      {pendingOrders.length > 0 &&
        pendingOrders.map((item) => <CartCard key={item.id} {...item} />)}
      <h1>Recent Orders</h1>
      {recentOrders.length > 0 &&
        recentOrders.map((item) => <CartCard key={item.id} {...item} />)}
    </Box>
  )
}

export default Profile
