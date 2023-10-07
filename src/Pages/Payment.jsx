import { Box, Button, Container, FormControl,Icon ,Image} from "@chakra-ui/react";
import React from "react";
import {
  FormLabel,
  Input,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaGooglePay } from 'react-icons/fa';

// import { useDispatch } from "react-redux";

export  const Payment = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
//   const dispatch= useDispatch();
  const handlePayment = (e) => {
    e.preventDefault();
    onOpen();
    setTimeout(() => {
   
      navigate("/");
    }, 5000);
  };

  return (
    <DIV >
      <Container maxW="1200px">
        {" "}

        <p className="payment_Text">Payment Details</p> <br />
        {/* <br /> */}
        {/* <Box
          display="flex"
          justifyContent="center"
          gap="20px"
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        >
  
          <Button width="300px" bg="white" variant="outline" colorScheme="teal" >Paytm
          </Button>
          <Button width="300px" variant={"outline"} colorScheme="teal" leftIcon={<Icon as={FaGooglePay} boxSize={55} alignItems={"center"} />}>
          </Button>
        </Box>{" "} */}
        {/* <br /> <br /> */}
        {/* <p className="payment_Text">Or Checkout using a Credit Card</p> <br /> */}
        <br />
        <Container
          padding="30px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        >
          <Box>
            <form onSubmit={handlePayment}>
              <FormControl isRequired>
                <FormLabel>Cardholder name</FormLabel>
                <Input type="text" placeholder="Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Card number</FormLabel>
                <Input
                  type="number"
                  placeholder="xxxx-xxxx-xxxx"
                   maxLength={12}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Expiration</FormLabel>
                <Input type="date" placeholder="DD/MM/YY" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>CVV</FormLabel>
                <Input type="number" placeholder="xxx" maxLength={3} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Postal Code</FormLabel>
                <Input
                  type="number"
                  placeholder="postal zip code"
                  maxLength={6}
                />
              </FormControl>{" "}
              <br /> <br />
              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Door-no/Locality/City"
                  
                />
              </FormControl>{" "}
              <br />
              <br />
              <Button className="paymentbtn" ml={["5","10","15","20"]} m={["auto","auto","auto"]} width={["150px","200px","300px"]} colorScheme="teal" variant={"outline"} type="submit">
                Make Payment
              </Button>{" "}
           
            </form>
            {/* modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <Center>
                  <img
                    src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!bw700"
                    alt=""
                    width="100px"
                  />{" "}
                </Center>
                <ModalBody>
                  <Center>
                    <br />
                    <br />
                    <Heading
                      color="teal"
                      size="md"
                      fontFamily="Sofia, sans-serif"
                    >
                      Congratulation !
                    </Heading>
                    <br />
                    <br />
                  </Center>
                  <Center>
                    <Text fontFamily="Sofia, sans-serif">
                      Your order SuccessFully placed
                    </Text>
                  </Center>
                  <br />
                  <Center>
                    <Text fontFamily="Sofia, sans-serif">
                      Keep Visiting again !
                    </Text>
                  </Center>
                  <br />
                  <Center>
                    <Text fontFamily="Sofia, sans-serif" color="teal">
                      Thank you !
                    </Text>
                  </Center>
                  <br />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
          {/* <Payment2/> */}
        </Container>
      </Container>{" "}
      <br />
      <br />
      <br />
      <br />
    </DIV>
  );
};

const DIV = styled.div`
padding: 20px;
margin: auto;
/* background-image: url("https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg"); */
  .payment_Text {
    font-size: 20px;
    font-weight: bold;
  }
  p{
    text-align: center;
  }
  
`;

