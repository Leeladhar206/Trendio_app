

import React from 'react';
import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Image,
  Button,
  ButtonGroup,
  Tooltip,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container maxW="90%" p={4} textAlign="center" >
      <Heading as="h1" size="xl" mt={8} mb={4}>
        About Us
      </Heading>
      <Box  overflow="hidden" mt={4} >
        <video autoPlay loop muted controls style={{ width: '100%' }}>
          <source src="https://video.asos-media.com/Navigation/_content_TOPSHOP_ASOSHOMEPAGE_1440X640_VERSION5_DT_Flash9_1440xAuto_2500K.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box textAlign="center" mt={10}  w={"100%"}  >
        <Image  src="https://thehouseofrare.com/cdn/shop/files/Slider_website_banner_-_rr_and_rm_1600x.jpg?v=1694522706" borderRadius="5px" width="90%" margin={"auto"} />
        <Heading as="h2" size="lg" mt={4}>
          About Trendio: Your Fashion Destination
        </Heading>
        <Text fontSize="lg" color="gray.600" mt={2} >
          Welcome to Trendio – your ultimate fashion destination for all things trendy and stylish. Born in the heart of India, Trendio is a cutting-edge e-commerce platform that brings you a curated collection of the latest clothing trends, meticulously designed to elevate your fashion game. We pride ourselves on being a trailblazer in the world of online shopping.
        </Text>
      </Box>

      <Divider my={8} />

      <Box>
        <Image src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?w=900&t=st=1696528024~exp=1696528624~hmac=083ae56a888084232d11b4335f92a4e98cc666cba4c9e42c58b2b943f64279e7" borderRadius="5px" width="90%" margin="auto" />
        <VStack spacing={4} align="start" mt={4}>
          <Heading as="h2" size="lg" m={"auto"}>
            Our Indian Heritage, Global Appeal
          </Heading>
          <Text fontSize="md">
            Rooted in the rich tapestry of Indian culture and craftsmanship, Trendio celebrates the diverse and vibrant essence of India while catering to a global audience.
          </Text>
        </VStack>
      </Box>

      <Divider my={8} />

      <Box>
        {/* <Image src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?t=st=1692909057~exp=1692909657~hmac=1b189bf4d6704d3413db4cc5f991454ff4ed17e6bbf6b43a6b6e30ccb323e248" borderRadius="20px" width="100%" /> */}
        <VStack spacing={4} align="start" mt={4}>
          <Heading as="h2" size="lg" m={"auto"}>
            What Sets Us Apart
          </Heading>
          <Text fontSize="md">
            Curation Excellence: Our dedicated team of fashion experts scours the industry for the latest trends, handpicking only the finest apparel to grace our virtual shelves. Each item is chosen with precision, guaranteeing that our customers stay ahead in the fashion game.
          </Text>
        </VStack>
      </Box>

      <Divider my={8} />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        width="100%"
        // borderRadius="10px"
        py={12}
        bgImage="url('https://img.freepik.com/premium-photo/pure-feelings-beautiful-young-couple-denim-wear-bonding-smiling_425904-7930.jpg?w=900')"
        bgPosition="center"
        bgRepeat="no-repeat"
        m={2}
        height={['200px', '400px', '600px']}
      >
        <ButtonGroup gap='4'>
          <Tooltip label='Go to Men\s Shop'>
            <Link to={"/men"}>
              <Button colorScheme='blackAlpha'>
                Men's Shop <ArrowForwardIcon />
              </Button>
            </Link>
          </Tooltip>
          <Tooltip label='Go to Women\s Shop'>
            <Link to={"/women"}>
              <Button colorScheme='blackAlpha'>
                Women's Shop <ArrowForwardIcon />
              </Button>
            </Link>
          </Tooltip>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default About;
