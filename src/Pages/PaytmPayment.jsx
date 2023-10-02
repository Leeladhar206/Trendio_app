// PaytmPayment.js
import React from "react";
import { Button } from "@chakra-ui/react";
// import { FaPaytm } from "react-icons/fa"; // Import the Paytm icon

const PaytmPayment = () => {
  // Add your Paytm payment logic here

  return (
    <Button
      width="300px"
      bg="white"
      variant="outline"
      colorScheme="teal"
      onClick={() => {
        // Handle Paytm payment logic here
      }}
    >
      {/* Paytm <FaPaytm style={{ marginLeft: "5px" }} /> */}
    </Button>
  );
};

export default PaytmPayment;
