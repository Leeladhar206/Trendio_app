import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Icon,
  Button,
  Spacer,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { BsArrowRightSquare, BsCheckCircle } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dela+Gothic+One&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">`;

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
  ];

  return (
    <Box
      fontFamily="Poppins, sans-serif"
      fontSize="md"
      padding={10}
      width="100%"
      margin="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} />

      <Box pt={5}>
        <Flex
          w="100%"
          m="auto"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "space-between" }}
          alignItems="center"
          textAlign="center"
          flexWrap="wrap"
          gap={8}
        >
          <Box
            flex={{ base: "auto", md: "1" }}
            textAlign={{ base: "center", md: "left" }}
            w="100%"
          >
            <Image
              src="https://i.ibb.co/HKhTgvj/img15.png"
              alt="3 circles"
              width="100%"
              height="auto"
              display={{ base: "none", md: "block" }}
            />
            <Box>
              <Text fontWeight={500} pt={{ base: 4, sm: 0 }}>
                Fashion is a form of self-
              </Text>
              <Text fontWeight={500}>expression and autonomy</Text>
              <Text fontWeight={500}>at a particular period</Text>
              <Link to="/about">
                <Text pt={4} fontWeight={600}>
                  READ MORE <Icon as={BiRightTopArrowCircle} mb={-1.1} />
                </Text>
              </Link>
            </Box>
          </Box>

          <Box flex={{ base: "auto", md: "3" }} m={0}>
            <Text
              fontSize={{ base: "2rem", sm: "2.5rem", xl: "4.6rem" }}
              fontFamily={"Dela Gothic One, sans-serif"}
              mb={-3}
              letterSpacing={2}
            >
              CLOTHES ARE
            </Text>
            <Text
              fontSize={{ base: "2rem", sm: "2.5rem", xl: "4.6rem" }}
              fontFamily={"Dela Gothic One, sans-serif"}
              mb={-3}
            >
              THE <Icon h={"3rem"} ml={2} mr={2} as={BsArrowRightSquare} />{" "}
              SPIRIT
            </Text>
            <Text
              fontSize={{ base: "2rem", sm: "2.5rem", xl: "4.6rem" }}
              fontFamily={"Dela Gothic One, sans-serif"}
            >
              OF FASHION
            </Text>
          </Box>

          <Box
            flex={{ base: "auto", md: "1" }}
            mt={{ base: 3, sm: 0 }}
            w={{ base: "70%", md: "100%" }}
          >
            <Box
              w={{ base: "100%", sm: "40%", md: "80%" }}
              border={"2px solid black"}
              m={"auto"}
              borderRadius={"6rem"}
            >
              <Image
                src="https://i.ibb.co/2s7x9f8/img4.jpg"
                alt="Image 3"
                w="70%"
                m="auto"
                mt={8}
              />
              <Text fontWeight={500}>Varsity Jacket</Text>
              <Text mb={4} fontWeight={600}>
                ₹ 650
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box mb={-2} w="90%" mt={10}>
        <Flex
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          textAlign="center"
        >
          <Box>
            <Button borderRadius={"2rem"} bg={"black"} color={"white"}>
              01
            </Button>
            <Button
              borderRadius={"2rem"}
              border={"2px solid black"}
              bg="white"
              color={"black"}
            >
              MAN COLLECTION
            </Button>
          </Box>
          <Text
            fontFamily={"Dela Gothic One, sans-serif"}
            display={{ base: "none", md: "block" }}
          >
            #2023
          </Text>
        </Flex>
      </Box>

      <Box>
        <Flex
          w="100%"
          m="auto"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "space-around" }}
          alignItems="center"
          flexWrap="wrap"
          gap={3}
        >
          <Box flex={{ base: "auto", md: "1" }}>
            <Image
              src="https://i.ibb.co/bmMR3FG/img7.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>

          <Box position="relative" flex={{ base: "auto", md: "1" }}>
            <Image
              src="https://i.ibb.co/6bgHWzK/img8.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
            <Link to="/men">
              <Text
                position="absolute"
                top="20%"
                left="70%"
                transform="translate(-50%, -50%)"
                color="white"
                fontSize="md"
                fontWeight={500}
                zIndex="1"
              >
                Explore
              </Text>
              <Text
                position="absolute"
                top="25%"
                left="70%"
                transform="translate(-50%, -50%)"
                color="white"
                fontSize="md"
                fontWeight={500}
                zIndex="1"
              >
                More
              </Text>
            </Link>
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="black"
              fontFamily={"Archivo black, sans-serif"}
              fontSize={{ base: "6xl", md: "4xl", lg: "6xl" }}
              zIndex="1"
            >
              25%
            </Text>
            <Text
              position="absolute"
              top="60%"
              left="48%"
              transform="translate(-50%, -50%)"
              color="black"
              fontWeight={500}
              fontSize="sm"
              zIndex="1"
            >
              on new-arrivals
            </Text>
          </Box>

          <Box flex={{ base: "auto", md: "1" }}>
            <Image
              src="https://i.ibb.co/X458F5R/img6.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>
        </Flex>
      </Box>

      <Box w="100%">
        <Box w="80%" m="auto">
          <Text fontSize="4xl" fontWeight={700}>
            POPULAR PRODUCTS
          </Text>
        </Box>
        <Box width="80%" height="auto" margin="auto" mt={8}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/product/12">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w="100%"
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "lg",
                }}
              >
                <Image
                  src="https://www.rareism.com/cdn/shop/files/FINN-PINK-SWEAT2029_900x.jpg?v=1693215214"
                  alt="Cropped Hoodie"
                />
                <Box p={4}>
                  <Heading as="h2" size="md" mb={2}>
                    Cropped Hoodie
                  </Heading>
                  <Text>Price: $34.99</Text>
                  <Text>Brand: Adidas</Text>
                </Box>
              </Box>
            </Link>
            <Link to="/product/17">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w="100%"
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "lg",
                }}
              >
                <Image
                  src="https://thehouseofrare.com/cdn/shop/files/EASE-BLACK1524_900x.jpg?v=1692699317"
                  alt="Hawaiian Shirt"
                />
                <Box p={4}>
                  <Heading as="h2" size="md" mb={2}>
                    Hawaiian Shirt
                  </Heading>
                  <Text>Price: $32.99</Text>
                  <Text>Brand: Tommy Bahama</Text>
                </Box>
              </Box>
            </Link>
            <Link to="/product/19">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w="100%"
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "lg",
                }}
              >
                <Image
                  src="https://thehouseofrare.com/cdn/shop/files/BASTIAN-BEIGE3016HERO_900x.jpg?v=1693807429"
                  alt="Jogger Pants"
                />
                <Box p={4}>
                  <Heading as="h2" size="md" mb={2}>
                    Jogger Pants
                  </Heading>
                  <Text>Price: $34.99</Text>
                  <Text>Brand: Adidas</Text>
                </Box>
              </Box>
            </Link>
            <Link to="/product/4">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w="100%"
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.02)",
                  boxShadow: "lg",
                }}
              >
                <Image
                  src="https://www.rareism.com/cdn/shop/products/IMG_0038_bbc9666a-7fbd-462a-8afb-795a18a565da_900x.jpg?v=1661174565"
                  alt="Striped Sweater"
                />
                <Box p={4}>
                  <Heading as="h2" size="md" mb={2}>
                    Striped Sweater
                  </Heading>
                  <Text>Price: $39.99</Text>
                  <Text>Brand: Gap</Text>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Box>
      </Box>

      <Box w="90%">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent={{ base: "center", lg: "space-around" }}
          alignItems="center"
          textAlign="center"
        >
          <Box
            flex={{ base: "auto", md: "55%" }}
            textAlign={"left"}
            pl={"6rem"}
            pr={"5rem"}
            pt={-10}
          >
            <Text
              fontSize={{ base: "5xl", xl: "4rem" }}
              fontFamily={"Dela Gothic One, sans-serif"}
            >
              WE THINK
            </Text>
            <Flex alignItems={"center"}>
              <Text
                fontSize={{ base: "5xl", xl: "4rem" }}
                fontFamily={"Dela Gothic One, sans-serif"}
              >
                YOU'LL
              </Text>
              <Text
                pl={4}
                pb={5}
                fontSize={"2xl"}
                fontFamily={"Dela Gothic One, sans-serif"}
              >
                LIKE THIS
              </Text>
            </Flex>
            <Text fontWeight={500} pt={10}>
              Fashion is a form of self-expression and autonomy at a
            </Text>
            <Text fontWeight={500} pt={3}>
              particular period and place in a specific context,
            </Text>
            <Text fontWeight={500} pt={3} pb={3}>
              of clothing, footwear, lifestyle, accessories. The latest
            </Text>
            <Text fontWeight={500} pb={10}>
              fashion news, beauty coverage, celebrity style.
            </Text>

            <Box display={{ base: "none", md: "flex" }} pt={10}>
              <Box display={"flex"} alignItems={"center"}>
                <Icon w={"3rem"} h={"3rem"} as={BsCheckCircle} />
                <Flex flexDirection={"column"}>
                  <Text pl={5} pb={4} fontWeight={600}>
                    Care instructions
                  </Text>
                  <Text pl={5} fontWeight={400}>
                    Machine wash at 30'C
                  </Text>
                </Flex>
              </Box>

              <Box display={"flex"} alignItems={"center"} pl={5}>
                <Icon w={"3rem"} h={"3rem"} as={BsCheckCircle} />
                <Flex flexDirection={"column"}>
                  <Text pl={5} pb={4} fontWeight={600}>
                    Fabric Material
                  </Text>
                  <Text pl={5} fontWeight={400}>
                    84% Cotton, 16% Polyster
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>

          <Box pt={10} flex={{ base: "auto", md: "45%" }}>
            <Image
              src="https://i.ibb.co/cNdF2zW/img9.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>
        </Flex>
      </Box>

      <Spacer h={10} />

      <Box border="2px solid black" w="85%" m="auto" borderRadius={"3rem"}>
        <Grid
          templateRows={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(7, 1fr)" }}
          gap={0}
        >
          <GridItem colSpan={{ base: 1, lg: 3 }} rowSpan={{ base: 2, lg: 2 }}>
            <Box>
              <Image
                src="https://i.ibb.co/BBHZjy6/img10.png"
                alt="Image 3"
                width="100%"
                borderRadius={"4rem"}
                height="auto"
              />
            </Box>
          </GridItem>

          <GridItem
            colSpan={{ base: 2, lg: 2 }}
            rowSpan={{ base: 1, lg: 1 }}
            display="flex"
            alignItems="center"
            borderRight={{ base: "none", lg: "2px solid black" }}
            borderBottom={{ base: "none", lg: "2px solid black" }}
            borderLeft={{ base: "none", lg: "2px solid black" }}
          >
            <Box m={4}>
              <Text fontSize={"3xl"} fontWeight={600}>
                Pattern
              </Text>
              <Text>Colourful & Print</Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, lg: 2 }}
            rowSpan={{ base: 1, lg: 1 }}
            display="flex"
            alignItems="center"
            borderBottom={{ base: "none", lg: "2px solid black" }}
          >
            <Box m={4}>
              <Text fontSize={"3xl"} fontWeight={600}>
                We are the online platform for fashion and lifestyle
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, lg: 2 }}
            rowSpan={{ base: 1, lg: 1 }}
            display="flex"
            alignItems="center"
            borderRight={{ base: "none", lg: "2px solid black" }}
            borderLeft={{ base: "none", lg: "2px solid black" }}
          >
            <Box m={4}>
              <Text>
                we have grown from a pioneer in e-commerse to become a leading
                European online platform
              </Text>
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, lg: 2 }}
            rowSpan={{ base: 1, lg: 1 }}
            display="flex"
            alignItems="center"
          >
            <Box m={4}>
              <Text fontSize={"3xl"} fontWeight={600}>
                Material
              </Text>
              <Text> 100% cotton & polyester</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box w="90%" mt={12}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-around" }}
          alignItems="center"
          textAlign="center"
        >
          <Box flex={{ base: "auto", md: "1" }}>
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight={700}
              textAlign={{ base: "center", md: "left" }}
            >
              Outfit inspiration Snag their style
            </Text>
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Image
              src="https://i.ibb.co/4dv2NSD/img14.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>

          <Box flex={{ base: "auto", md: "1" }}>
            <Text p={10} textAlign={"left"} fontWeight={500}>
              Open communication and participation are pivotal elements of our
              company culture. How a bold idea spawned a leading European online
              platform
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Image
          src="https://i.ibb.co/6W9kNJj/img12.png"
          alt="Image 3"
          width="100%"
          height="auto"
        />
      </Box>

      <Box mx={[2, 4, 6, 10]} w={['100%', '95%', '90%']} px={2} py={4}>
        <Text fontSize={'3xl'} fontWeight="bold" mb={4}>
          Frequently Asked Questions
        </Text>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize={'lg'} fontWeight={500} p={2}>
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={2}>
                <Text fontSize={'md'} p={2}>
                  {faq.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default HomePage;
