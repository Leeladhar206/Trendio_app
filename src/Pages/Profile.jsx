import React, { useEffect, useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import axios from "axios";
import { URL } from "./Login";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("token") || "";
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

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
          const userData = response.data[0];
          if (userData) {
            setUserData(userData);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box maxW="400px" mx="auto" p="4" bg="gray.100" borderRadius="md" boxShadow="md">
      <Heading as="h1" textAlign="center" mb="4">
        Profile
      </Heading>
      {userData && (
        <Box textAlign="center">
          <p className="welcome-text">Welcome, {userData.f_name}!</p>
          
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
      
    </Box>
  );
};

export default Profile;
