import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  VStack,
} from "@chakra-ui/react";

const OrderCard = ({ productName, productPrice, quantity, productImage }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Flex>
       
        <Box flex={1}>
          <Image src={productImage} alt={productName} maxH="100px" maxW="100px" />
        </Box>

        <VStack flex={2} alignItems="flex-start" spacing={2} ml={3}>
          <Heading as="h6" size="md">
            {productName}
          </Heading>
          <Text fontSize="lg" fontWeight="bold">
            Price: ${productPrice}
          </Text>
          <Text>Quantity: {quantity}</Text> 
        </VStack>
      </Flex>
    </Box>
  );
};

export default OrderCard;