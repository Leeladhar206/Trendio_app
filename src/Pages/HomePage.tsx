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
} from "@chakra-ui/react";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { BsArrowRightSquare,BsCheckCircle } from "react-icons/bs";

const HomePage = () => {
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dela+Gothic+One&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`;

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
    <Box fontFamily="Poppins, sans-serif" fontSize="md" padding={10}>
      <Box dangerouslySetInnerHTML={{ __html: newFont }} />

      <Box pt={10}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-around
          "
          alignItems="center"
          textAlign="center"
        >
          <Box flex={{ base: "auto", md: "1" }} textAlign={"left"}>
            <Image
              src="https://i.ibb.co/4t1Vzsk/img3.jpg"
              alt="3 circles"
              width="90%"
              height="auto"
            />
            <Text pl={10} fontWeight={500}>
              Fashion is a form of self-
            </Text>
            <Text pl={10} fontWeight={500}>
              expression and autonomy
            </Text>
            <Text pl={10} fontWeight={500}>
              at a particular period
            </Text>
            <Text pt={4} pl={10} fontWeight={600}>
              READ MORE <Icon as={BiRightTopArrowCircle} mb={-1.1} />
            </Text>
          </Box>
          <Box flex={{ base: "auto", md: "3" }} m={0}>
            <Text
              fontSize="4.7rem"
              fontFamily={"Dela Gothic One, sans-serif"}
              mb={-3}
              letterSpacing={4}
            >
              CLOTHES ARE
            </Text>
            <Text
              fontSize="4.5rem"
              fontFamily={"Dela Gothic One, sans-serif"}
              mb={-3}
            >
              THE <Icon h={"3.6rem"} ml={2} mr={2} as={BsArrowRightSquare} />
              SPIRIT
            </Text>
            <Text fontSize="4.5rem" fontFamily={"Dela Gothic One, sans-serif"}>
              OF FASHION
            </Text>
          </Box>

          <Box flex={{ base: "auto", md: "1" }} mt={3}>
            <Box
              w="60%"
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
      <Spacer h={16} />
      <Box pl={6} pr={20} mb={-2}>
        <Flex
          justifyContent="space-between"
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
          <Text fontFamily={"Dela Gothic One, sans-serif"}>#2023</Text>
        </Flex>
      </Box>

      <Box>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-around"
          alignItems="center"
          textAlign="center"
        >
          <Box>
            <Image
              src="https://i.ibb.co/bmMR3FG/img7.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>

          <Box position="relative">
            <Image
              src="https://i.ibb.co/6bgHWzK/img8.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
            <Text
              position="absolute"
              top={"4.7rem"}
              right={"6rem"}
              color="white"
              fontSize="md"
              fontWeight={500}
              zIndex="1"
            >
              Explore
            </Text>
            <Text
              position="absolute"
              top={"6rem"}
              right={"7rem"}
              color="white"
              fontSize="md"
              fontWeight={500}
              zIndex="1"
            >
              More
            </Text>
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="black"
              fontFamily={"Archivo black, sans-serif"}
              fontSize="6xl"
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
          <Box>
            <Image
              src="https://i.ibb.co/X458F5R/img6.png"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>
        </Flex>
      </Box>
      <Box>


        <Text fontSize="4xl" fontWeight={700} pl={6} >
          POPULAR PRODUCTS
        </Text>
        <Box width="100%" border={"1px solid black"} height={"300px"} pl={6.
        }></Box>
      </Box>

      <Box pt={10} pl={10} pr={10}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-around"
          alignItems="center"
          textAlign="center"
        >
          <Box width={"55%"} textAlign={"left"} pl={"6rem"} pr={"5rem"} pt={-10}>
            <Text fontSize="4rem"
              fontFamily={"Dela Gothic One, sans-serif"}  >WE THINK</Text>
              <Flex alignItems={"center"}>

            <Text fontSize="4rem"
              fontFamily={"Dela Gothic One, sans-serif"}>YOU'LL </Text>
              <Text pl={4} pb={5} fontSize={'2xl'} fontFamily={"Dela Gothic One, sans-serif"}>LIKE THIS</Text>
              </Flex>
            <Text fontWeight={500} pt={10}>Fashion is a form of self-expression and autonomy at a</Text>
            <Text fontWeight={500} pt={3}>particular period and place in a specific context,</Text>
            <Text fontWeight={500} pt={3} pb={3}>of clothing, footwear, lifestyle, accessories. The latest</Text>
            <Text fontWeight={500} pb={10}>fashion news, beauty coverage, celebrity style.</Text>
            
            <Box display={"flex"} pt={10}>

            <Box display={"flex"} alignItems={"center"}>
              <Icon w={"3rem"} h={"3rem"} as={BsCheckCircle} />
              <Flex
              flexDirection={"column"}
               >
                <Text pl={5} pb={4} fontWeight={600}>Care instructions</Text>
                <Text pl={5} fontWeight={400}>Machine wash at 30'C</Text>
            </Flex>
            </Box>

            <Box display={"flex"} alignItems={"center"} pl={5}>
              <Icon w={"3rem"} h={"3rem"} as={BsCheckCircle} />
              <Flex
              flexDirection={"column"}
            >
                <Text pl={5} pb={4} fontWeight={600}>Fabric Material</Text>
                <Text pl={5} fontWeight={400}>84% Cotton, 16% Polyster</Text>
               </Flex>
            </Box>
            
            </Box>

          </Box>


          <Box width={"45%"} pt={10}>
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

      <Box border="2px solid black" w="85%" m="auto"
      borderRadius={"3rem"}
      >
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(7, 1fr)"
      >
        <GridItem colSpan={3} rowSpan={2}>
          <Box borderRight={"2px solid black"}>
            <Image
              src="https://i.ibb.co/BBHZjy6/img10.png"
              alt="Image 3"
              width="100%"
              borderBottomLeftRadius={"4rem"}
              borderTopLeftRadius={"4rem"}
              height="auto"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1} display="flex" alignItems="center"
        borderRight={"2px solid black"}
        borderBottom={"2px solid black"}
        >
         <Box m={14}>
          <Text fontSize={'3xl'} fontWeight={600}>Pattern</Text>
          <Text>Colourful & Print</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1} display="flex" alignItems="center" borderBottom={"2px solid black"}>
        <Box m={14}>
          <Text fontSize={'3xl'} fontWeight={600}>We are the online platform for fashion and lifestyle</Text>

          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1} display="flex"  alignItems="center"
        borderRight={"2px solid black"}
        >
        <Box m={14} >
          <Text>we have grown from a pioneer in e-commerse to become a leading European online platform</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1} display="flex"alignItems="center">
        <Box m={14}>
          <Text fontSize={'3xl'} fontWeight={600}>Material</Text>
          <Text> 100% cotton & polyester</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>

      <Box pt={10}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          <Box flex={{ base: "auto", md: "2" }} border={"1px solid black"}>
            <Text>Outfit inspiration</Text>
            <Text>Snag their style</Text>
          </Box>
          <Box flex={{ base: "auto", md: "1" }} border={"1px solid black"}>
            <Image
              src="https://i.ibb.co/4t1Vzsk/img3.jpg"
              alt="Image 3"
              width="100%"
              height="auto"
            />
          </Box>

          <Box flex={{ base: "auto", md: "2" }} border={"1px solid black"}>
            <Text>Open communication and participation</Text>
            <Text>are pivotal elements of our company</Text>
            <Text>culture. How a bold idea spawned a</Text>
            <Text>leading European online platform</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Text fontSize="4xl" fontFamily={"Archivo , sans-serif"}>
          NEW ARRIVALS
        </Text>
        <Box width="100%" border={"1px solid black"} height={"300px"}></Box>
      </Box>

      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Frequently Asked Questions
        </Text>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight={600} p={3}>
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="lg" p={3}>
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
