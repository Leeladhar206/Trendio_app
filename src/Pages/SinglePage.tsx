import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Image, Text, Heading } from '@chakra-ui/react';

// Define a type for your product data
interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  gender: string;
  images: string[];
 
}

const SinglePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Define the type for id
  const [data, setData] = useState<Product | null>(null); // Initialize as null
  const products = useSelector((store) => store.productReducer.products);

  useEffect(() => {
    const product = products.find((el: Product) => el.id === +id);
    if (product) {
      setData(product);
    }
  }, [id, products]);

  console.log(data)

  return (
    <Container maxW="container.lg" py={8} pt={20}>
      <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
        <Box flex={{ base: '1', lg: '1' }} maxWidth={{ base: '100%', lg: '50%' }}>
          <Image src={data?.images[0]} alt={data?.name} /> 
        </Box>
        <Box flex={{ base: '1', lg: '1' }} pl={{ lg: '8' }}>
          <Heading as="h2" size="lg" mb={4}>
            {data?.name} 
          </Heading>
          <Text>Brand: {data?.brand}</Text> 
          <Text>Price: Rs. {data?.price}</Text> 
          <Text>Gender: {data?.gender}</Text> 
          <Button
            colorScheme="teal"
            variant="solid"
            mt={4}
            onClick={() => alert('Product added to Cart Successfully')}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SinglePage;
