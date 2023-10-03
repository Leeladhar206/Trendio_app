import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { useToast } from "@chakra-ui/react";


import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useNumberInput,
  Container,
  Heading,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
import { getSingleProduct } from "../Redux/SingleProduct/action"
import { ZoomIn, ZoomOut } from "@mui/icons-material"
import axios from "axios"
import { URL } from "./Login"
// import { CartDrawer } from './CartDrawer';
// import { getSingleProductData } from '../Redux/UserPage/action';

export const SinglePage = () => {


  let singleProduct = useSelector((store) => store.singleProductReducer.product)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const toast = useToast();


  let { id } = useParams()

  const dispatch = useDispatch()

  


  //   let { singleProduct, isLoading, isError } = useSelector((store: RootState) => ({
  //     singleProduct: store.productReducer.singleProduct,
  //     isLoading: store.productReducer.isLoading,
  //     isError: store.productReducer.isError,
  //   }));

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 1000,
      precision: 0,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const [isOpen, setIsOpen] = useState(false)
  // const [zoomLevel, setZoomLevel] = useState(1);
  function onClose() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, [])

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
  }

  const [quantity, setQuantity] = useState(1)

  const addCartHandle = () => {
    let cartItem = {}
    cartItem.productId = singleProduct.id
    cartItem.image = singleProduct.images[0]
    cartItem.productName = singleProduct.name
    cartItem.price = singleProduct.price
    cartItem.quantity = quantity
    cartItem.total = cartItem.price * cartItem.quantity

    cartItem.checkedOut = false
    cartItem.usertoken = localStorage.getItem("token")
    // console.log(cartItem)
    axios({
      method: "post",
      url: `${URL}/carts`,
      data: cartItem,
    })
    .then((response) => {
      console.log("Added to cart:", response.data);
      // Show a success toast
      toast({
        title: "Product Added",
        description: "The product has been added to your cart successfully.",
        status: "success",
        duration: 3000, // Display for 3 seconds
        isClosable: true,
      });
    })
    .catch((error) => {
      console.error("Error adding to cart:", error);
      // Handle error if needed
    });
  }

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by browsing our website, selecting the items you like, and adding them to your cart. Once you're ready to checkout, follow the prompts to provide your shipping and payment information. It's easy and convenient!",
    },
    {
      question: "Is home delivery available?",
      answer:
        "Yes, we offer home delivery to your location. During checkout, you can select your preferred shipping address, and we'll ensure your order is delivered right to your doorstep.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We want you to be satisfied with your purchase. If you're not happy with an item, you can return it within 30 days of delivery for a full refund or exchange. Please review our detailed return policy for more information.",
    },
    {
      question: "How can I check the availability of sizes?",
      answer:
        "You can check the availability of sizes for a specific item by visiting the product page. We provide size charts and guidance to help you select the right size. If you have further questions, feel free to contact our customer support.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your package as it makes its way to you.",
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer:
        "Yes, we offer Cash on Delivery (COD) as a payment option for your convenience. You can choose COD during checkout and pay for your order when it's delivered to your doorstep.",
    },
    {
      question: "Can I cancel or modify my order after it's placed?",
      answer:
        "We understand that circumstances may change. If you need to cancel or modify your order, please contact our customer support as soon as possible. We'll do our best to accommodate your request if the order has not already been processed.",
    },
  ]

  // console.log(singleProduct.images)

  return (
    <>
      <Flex
        p={120}
        direction={["column", "column", "row"]}
        w={"100%"}
        m={"auto"}
        pb={"80px"}
        pl={["10%"]}
        pr={["10%"]}
        pt={"10px"}
        fontFamily={"Poppins"}
        bg={"#f5f5f5"}
      >
        <Flex direction={["column-reverse", "row"]}>
          <Flex
            w={["40%", "18%"]}
            paddingRight={10}
            paddingTop={[0, 0, 20]}
            direction={["row", "column"]}
            justifyContent={["start"]}
            alignItems={["center", "flex-start"]}
          >
            {singleProduct?.images?.length > 0
              ? singleProduct.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    w={["500px", "500px", "500px"]}
                    m={["auto 12px", "25px auto"]}
                    // border={"1px solid white" }
                    onClick={() => handleImageClick(index)}
                  />
                ))
              : null}
          </Flex>
          {singleProduct?.images?.length > 0 ? (
            <Box>
              <Image
                src={singleProduct?.images[selectedImageIndex]}
                w={["500px", "500px", "500px"]}
                m={"50px auto"}
              />
            </Box>
          ) : null}
        </Flex>

        <Box
          bgColor={"white"}
          borderRadius={"20px"}
          w={["100%", "100%", "55%"]}
          p={"50px"}
          m={"auto"}
          marginTop={[10, 10, 20]}
        >
          <Text
            color={"#070808"}
            textTransform={"uppercase"}
            fontSize={32}
            fontWeight={600}
          >
            {singleProduct?.name}
          </Text>
          <Text fontWeight={500} m={"10px auto"}>
            {" "}
            Price: $ {singleProduct?.price}
          </Text>
          <Text fontWeight={500}>{singleProduct?.description}</Text>
          <Text fontWeight={500} m={"10px auto 10px"}>
            {" "}
            Category: {singleProduct?.category}
          </Text>

          <Flex alignItems={"center"} fontSize={18} m={"10px auto"}>
            {new Array(Math.floor(singleProduct?.rating || 1))
              .fill(0)
              .map((el, index) => (
                <Box key={index} m={"0px 1px"}>
                  <FaStar color="#ffb128" />
                </Box>
              ))}
            {new Array(5 - Math.floor(singleProduct?.rating || 1))
              .fill(0)
              .map((el, index) => (
                <Box key={index} m={"0px 1px"}>
                  <FaStar color="grey" />
                </Box>
              ))}
            <Box ml={"10px"} alignItems={"center"}>
              <Text fontSize={"15px"} color={"#5c676d"}>
                ({singleProduct?.reviews?.length} customer reviews)
              </Text>
            </Box>
          </Flex>
          <Text color={"#5c676d"} m={"20px 0"}>
            {singleProduct?.about}
          </Text>
          <hr />
          <HStack maxW="150px" mt={"20px"}>
            <Button
              bg="#f5f5f5"
              {...dec}
              onClick={() => setQuantity((prev) => prev - 1)}
            >
              -
            </Button>
            <Input textAlign={"center"} {...input} />
            <Button
              bg="#f5f5f5"
              {...inc}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </Button>
          </HStack>
          <Button
            onClick={addCartHandle}
            bgColor={"#2b3954"}
            color={"white"}
            colorScheme="#f8ac2a"
            size={"lg"}
            fontWeight={500}
            _hover={{ bgColor: "#407542" }}
            p={"20px 20px"}
            w={["100%", "100%", "70%"]}
            m={"20px 0"}
            borderRadius={"10px"}
            fontSize={20}
          >
            ADD TO CART
          </Button>
        </Box>
        {/* {isOpen && <CartDrawer onOpen={isOpen} onClose={onClose} />} */}
      </Flex>

      <Box bg={"white"} mt={"50px"} fontFamily={"poppins"}>
        <Heading
          as="h3"
          size="xl"
          color={"black"}
          fontWeight="lightbold"
          textAlign="center"
          fontFamily={"poppins"}
          mb={{ base: "4", md: "4" }}
        >
          Product Details
        </Heading>
        <Box
          m={["50px auto"]}
          w={["85%", "85%", "70%"]}
          borderRadius={"20px"}
          border={"1px solid #ebebeb"}
          p={[0, "10px", "20px"]}
        >
          <Flex
            alignItems={"center"}
            justifyContent={["center", "space-between"]}
            p={["5px", "5px", "20px"]}
          >
            <Box
              w={["40%", "40%", "20%"]}
              ml={[0, "20px"]}
              fontSize={"16"}
              color={"#444444"}
              fontWeight={"500"}
              p={["0", "0", "20px"]}
            >
              <Text p={"10px"}>Brand</Text>
              <Text p={"10px"}>Color</Text>
              <Text p={"10px"}>Material</Text>
              <Text p={"10px"}>Size</Text>
            </Box>
            <Box w={["60%", "60%", "90%"]} p={["5px", 0]}>
              <Flex>
                <Box
                  display={"inline-flex"}
                  pos={"relative"}
                  flexDirection={"column"}
                  gap={"30px"}
                  mr={"5px"}
                  alignItems={"center"}
                >
                  <Box
                    p={"12px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={["40px", "120px", "600px"]}
                    mt={"10px"}
                  ></Box>
                  <Box
                    p={"10px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-5px"}
                  ></Box>
                  <Box
                    p={"9px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-5px"}
                  ></Box>
                  <Box
                    p={"9px"}
                    borderBottom={"1px solid #ebebeb"}
                    w={"100%"}
                    mt={"-7px"}
                  ></Box>
                  {/* <Box  p={"9px"} borderBottom={"1px solid #ebebeb"}  w={"100%"}mt={"-7px"} ></Box> */}
                </Box>
                <Box color={"#5c676d"} textAlign={"left"} ml={"3px"}>
                  <Text paddingTop={"5px"} p={"10px"}>
                    {singleProduct?.brand}
                  </Text>
                  <Text p={"10px"}>{singleProduct?.color}</Text>
                  <Text p={"10px"}>{singleProduct?.material}</Text>
                  <Text p={"10px"}>{singleProduct?.size}</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Container maxW="80%" p={{ base: 5, md: 10 }} fontFamily={"poppins"}>
            <Flex justify="center">
              <Heading
                as="h3"
                size="xl"
                pb={"20px"}
                color={"black"}
                fontWeight="lightbold"
                textAlign="left"
                fontFamily={"poppins"}
                mb={{ base: "4", md: "2" }}
              >
                Recent Reviews
              </Heading>
            </Flex>
            <Stack direction="column" spacing={5} my={4}>
              {singleProduct?.reviews?.map((el, index) => {
                return (
                  <Stack
                    bg={"#fafafa"}
                    m={"auto"}
                    w={["100%", "85%"]}
                    p={["05px", "20px"]}
                    borderRadius={"20px"}
                    key={index}
                    direction="column"
                  >
                    <HStack spacing={3}>
                      <Avatar
                        size="md"
                        name={el?.username}
                        src={
                          "https://avatars.githubusercontent.com/u/37829341?v=4"
                        }
                      />
                      <Flex direction="column">
                        <Text fontWeight="500" fontSize="md">
                          {el?.username}
                        </Text>
                        <Text fontWeight="light" fontSize="xs">
                          4 Oct 2022
                        </Text>
                      </Flex>
                    </HStack>
                    <Flex fontSize={18} m={"8px 0"}>
                      {new Array(Math.floor(el?.rating || 1))
                        .fill(0)
                        .map((el, index) => (
                          <Box key={index} m={"0px 1px"}>
                            <FaStar color="#ffb128" />
                          </Box>
                        ))}
                      {new Array(5 - Math.floor(el?.rating || 1))
                        .fill(0)
                        .map((el, index) => (
                          <Box key={index} m={"0px 1px"}>
                            <FaStar color="grey" />
                          </Box>
                        ))}
                    </Flex>
                    <Text
                      color={"#5c676d"}
                      fontFamily={"poppins"}
                      fontSize="16"
                      textAlign="left"
                      lineHeight="1.375"
                      fontWeight="400"
                    >
                      {el?.comment}
                    </Text>
                  </Stack>
                )
              })}
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box
        mx={[2, 4, 6, 10]}
        w={["100%", "95%", "90%"]}
        px={2}
        py={4}
        marginBottom={10}
      >
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb={4}>
          Frequently Asked Questions
        </Text>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={["lg", "xl", "xxl"]} fontWeight={400} p={2}>
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2}>
                <Text fontSize={["md", "lg", "xl"]} p={2}>
                  {faq.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </>
  )
}
