// import React from "react"

// const CartCard = ({ productName, productPrice, quantity, total, image }) => {
//   console.log(image)
//   return (
//     <div>
//       <p>{productName}</p>
//       <img src={image} alt="" />
//       <p>{productPrice}</p>
//       <p>{quantity}</p>
//       <p>{total}</p>
//     </div>
//   )
// }

// export default CartCard
// import React from "react"

// const CartCard = ({ productName, productPrice, quantity, total,images }) => {
//   return (
//     <div>
//       {/* <Image src={images[0]} alt={name} height="150px"  /> */}
//       <p>{productName}</p>
//       <p>{productPrice}</p>
//       <p>{quantity}</p>
//       <p>{total}</p>
//     </div>
//   )
// }

// export default CartCard
// import React from "react";
// import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";

// const CartCard = ({ productName, price, quantity, image }) => {
//   return (
//     <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
//       <Image src={image} alt={name} height="150px" objectFit="cover" />
//       <Heading as="h4" size="md" mt={2}>
//         {productName}
//       </Heading>
//       <Text fontSize="lg" fontWeight="bold" mt={1}>
//         ${price}
//       </Text>
//       <Text>Quantity: {quantity}</Text>
//     </Box>
//   );
// };

// export default CartCard;

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

const CartCard = ({ productName, price, quantity, image }) => {
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
        </VStack>
      </Flex>
    </Box>
  );
};

export default CartCard;
