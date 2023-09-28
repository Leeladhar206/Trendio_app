
import { Container, Box, Heading, Text, VStack,Stack, Divider,Image,Button,ButtonGroup,Tooltip ,AspectRatio} from '@chakra-ui/react';
// import { Badge } from '@mui/material';
import {ArrowForwardIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container maxW="3xl">
      <Heading > About Us</Heading>
      <Box w="100%" maxW="800px" m="0 auto"  p="4">
        <video autoPlay loop muted controls style={{width:"1000px", borderRadius:"10px"}}>
          <source src="https://video.asos-media.com/Navigation/_content_TOPSHOP_ASOSHOMEPAGE_1440X640_VERSION5_DT_Flash9_1440xAuto_2500K.mp4" type="video/mp4" />
        </video>
      </Box>

      
      <Box textAlign="center" mt={10}>
        <Image src="https://wallpaperaccess.com/full/4670245.jpg" borderTop="3px solid gray" borderRadius="20px" width="100%"/>
        <Heading as="h1" size="xl" mb={4}>
          About Trendio: Your Fashion Destination
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Welcome to Trendio – your ultimate fashion destination for all things trendy and stylish. Born in the heart of India, Trendio is a cutting-edge e-commerce platform that brings you a curated collection of the latest clothing trends, meticulously designed to elevate your fashion game. We pride ourselves on being a trailblazer in the world of online shopping, seamlessly combining the power of technology with the allure of fashion.
        </Text>
      </Box>
     
      
      <Divider my={8}/>
<Box >
<Image src="https://images.unsplash.com/photo-1599476160130-3af44b69ec6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwaGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" borderRadius="20px" width="100%" />
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">
          Our Indian Heritage, Global Appeal:
        </Heading>
        <Text fontSize="md">
          Rooted in the rich tapestry of Indian culture and craftsmanship, Trendio celebrates the diverse and vibrant essence of India while catering to a global audience.
        </Text>
      </VStack>
      </Box>
      <Divider my={8} />
      <Stack direction='row' spacing={4} align='center' p={10}>
        <Heading as="h4" >We Have Brands </Heading>
      <Link to={"/brands"}><Button colorScheme='teal'  variant='outline' p={5}>Brands  <ArrowForwardIcon/>  </Button></Link> </Stack>
      <Box>
        <Divider my={8}/>
      <Image src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?t=st=1692909057~exp=1692909657~hmac=1b189bf4d6704d3413db4cc5f991454ff4ed17e6bbf6b43a6b6e30ccb323e248" borderRadius="20px" width="100%"/>
      <VStack spacing={4} align="start">
        
        <Heading as="h2" size="lg">
        What Sets Us Apart:
        </Heading>
        <Text fontSize="md">
        Curation Excellence: Our dedicated team of fashion experts scours the industry for the latest trends, handpicking only the finest apparel to grace our virtual shelves. Each item is chosen with precision, guaranteeing that our customers stay ahead in the fashion game.
        </Text>
      </VStack>
      </Box>
      <Divider my={8} />
      <Box>
      <Image src="https://wallpaperaccess.com/full/5932254.jpg" borderRadius="20px" width="100%"/>
      
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">
        Join the Trendio Community:
        </Heading>
        <Text fontSize="md">
        <Text fontSize={40} as="b">Trendio</Text> isn't just an app; it's a community of fashion enthusiasts, trendsetters, and individuals who appreciate the art of dressing well. Whether you're looking for a traditional ensemble that tells a story or a contemporary outfit that exudes confidence, Trendio has it all.

Join us on this exciting journey of self-expression through fashion.<br/> Download the Trendio app now and indulge in a world of style, culture, and creativity. Your fashion revolution starts here.
<br/>
<Text fontSize={30} as="b">Stay Connected:</Text>
<br/>
Follow us on social media to stay updated with the latest trends, exclusive offers, and fashion inspiration. Connect with us on Instagram, Facebook, and Twitter [@TrendioApp].
<br/>
<Text fontSize={30} as="b">Contact Information:</Text>
<br/>
For any inquiries, suggestions, or assistance, feel free to reach out to our dedicated customer support team at support@trendio.com.

Discover. Express. Transform with Trendio - Your Fashion Odyssey.
        </Text>
      </VStack>
</Box>
      <Divider my={8} />
      <Box
    display='flex'
    alignItems='flex-end'
    justifyContent='center'
    width='100%'
    py={12}
    bgImage="url('https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4877.jpg?w=900&t=st=1695897427~exp=1695898027~hmac=c2a0e64c98646b83242cc780ce0e94bfcc3429160f9a8b534979358c961f49f5')"
    bgPosition='center'
    bgRepeat='no-repeat'
    m={2}
    height="600px"
  >
    <ButtonGroup gap='4'>
    <Tooltip label='Goto Mens Shop'>
    <Link to={"/men"}><Button colorScheme='blackAlpha'> Men's Shop  <ArrowForwardIcon/> </Button></Link>
    </Tooltip>
    <Tooltip label='Goto Womens Shop'>
    <Link to={"/women"}><Button colorScheme='blackAlpha'>Women's Shop   <ArrowForwardIcon/>  </Button></Link>
    </Tooltip>
    </ButtonGroup>
  </Box>

    </Container>
  );
};

export default About;