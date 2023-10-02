

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
    <Container maxW="3xl" p={4} textAlign="center">
      <Heading as="h1" size="xl" mt={8} mb={4}>
        About Us
      </Heading>
      <Box borderRadius="10px" overflow="hidden" mt={4}>
        <video autoPlay loop muted controls style={{ width: '100%' }}>
          <source src="https://video.asos-media.com/Navigation/_content_TOPSHOP_ASOSHOMEPAGE_1440X640_VERSION5_DT_Flash9_1440xAuto_2500K.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box textAlign="left" mt={10}>
        <Image src="https://wallpaperaccess.com/full/4670245.jpg" borderRadius="20px" width="100%" />
        <Heading as="h2" size="lg" mt={4}>
          About Trendio: Your Fashion Destination
        </Heading>
        <Text fontSize="lg" color="gray.600" mt={2}>
          Welcome to Trendio – your ultimate fashion destination for all things trendy and stylish. Born in the heart of India, Trendio is a cutting-edge e-commerce platform that brings you a curated collection of the latest clothing trends, meticulously designed to elevate your fashion game. We pride ourselves on being a trailblazer in the world of online shopping, seamlessly combining the power of technology with the allure of fashion.
        </Text>
      </Box>

      <Divider my={8} />

      <Box>
        <Image src="https://images.unsplash.com/photo-1599476160130-3af44b69ec6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwaGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" borderRadius="20px" width="100%" />
        <VStack spacing={4} align="start" mt={4}>
          <Heading as="h2" size="lg">
            Our Indian Heritage, Global Appeal
          </Heading>
          <Text fontSize="md">
            Rooted in the rich tapestry of Indian culture and craftsmanship, Trendio celebrates the diverse and vibrant essence of India while catering to a global audience.
          </Text>
        </VStack>
      </Box>

      <Divider my={8} />

      <Box>
        <Image src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?t=st=1692909057~exp=1692909657~hmac=1b189bf4d6704d3413db4cc5f991454ff4ed17e6bbf6b43a6b6e30ccb323e248" borderRadius="20px" width="100%" />
        <VStack spacing={4} align="start" mt={4}>
          <Heading as="h2" size="lg">
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
        borderRadius="10px"
        py={12}
        bgImage="url('https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4877.jpg?w=900&t=st=1695897427~exp=1695898027~hmac=c2a0e64c98646b83242cc780ce0e94bfcc3429160f9a8b534979358c961f49f5')"
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
