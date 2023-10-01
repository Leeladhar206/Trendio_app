import { Box, Button, ChakraProvider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sample cart items
  const cartItems = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 15 },
  ];

  // Calculate total price
  // const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <ChakraProvider>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Button
          onClick={() => setIsCartOpen(true)}
          rightIcon={<Icon as={FaShoppingCart} />}
          colorScheme="teal"
          variant="solid"
        >
          Cart
        </Button>
      </Flex>

      {/* Cart Drawer */}
      <Drawer placement="right" isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              {cartItems.length === 0 ? (
                <Text>Your cart is empty.</Text>
              ) : (
                <Box>
                  
                </Box>
              )}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  );
}

export default CartPage;
