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

const CartCard = ({ productName, price, quantity, image, increaseQuantity, decreaseQuantity }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Flex>
       
        <Box flex={1}>
          <Image src={image} alt={productName} maxH="100px" maxW="100px" />
        </Box>

        <VStack flex={2} alignItems="flex-start" spacing={2} ml={3}>
          <Heading as="h4" size="md">
            {productName}
          </Heading>
          <Text fontSize="lg" fontWeight="bold">
            Price: ${price}
          </Text>
          <Text>Quantity: {quantity}</Text>
          <Button colorScheme="teal" size="sm" onClick={increaseQuantity}>
            Increase
          </Button>
          <Button colorScheme="red" size="sm" onClick={decreaseQuantity}>
            Decrease
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default CartCard;
