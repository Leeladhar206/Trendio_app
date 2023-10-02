import React from "react";
import { Box, Button, Icon } from "@chakra-ui/react";
import PaytmPayment from "./PaytmPayment";
import { FaGooglePay } from "react-icons/fa";


export const Payment2 = () => {
  // your existing code

  return (
    <div>
      {/* other code */}
      <Box
        display="flex"
        justifyContent="center"
        gap="20px"
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        {/* <PaytmPayment/> */}
        <Button
          width="300px"
          variant={"outline"}
          colorScheme="teal"
          leftIcon={<Icon as={FaGooglePay} boxSize={55} alignItems={"center"} />}
        >
          Google Pay
        </Button>
      </Box>
      {/* other code */}
    </div>
  );
};
