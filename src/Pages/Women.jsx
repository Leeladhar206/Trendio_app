import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getData } from '../Redux/productReducer/action';
import './Men.css';
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Skeleton,
  Center,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';



const Women = () => {
  const products = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to get data
    dispatch(getData);
  }, [dispatch]);

  const WomenProducts = products.filter(
    (product) => product.gender === 'Women'
  );

  return (
    <Container maxW="container.lg" py={8} pt={20} alignItems="center">
      <Heading as="h1" mb={4}>
        Women's Clothing
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Skeleton height="200px" />
              <Skeleton height="20px" mt={2} />
              <Skeleton height="20px" mt={2} />
              <Skeleton height="20px" mt={2} />
            </Box>
          ))
        ) : (
          WomenProducts.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <Image src={product.images[0]} alt={product.name} />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text>Price: ${product.price}</Text>
                <Text>Brand: {product.brand}</Text>
                <Text>
                  <Flex alignItems="center" fontSize={16} m="5px auto">
                    Rating:{' '}
                    {new Array(Math.floor(product.rating || 1)).fill(0).map((el, index) => (
                      <Box key={index} m="0px 1px">
                        <FaStar color="#ffb128" />
                      </Box>
                    ))}
                    {new Array(5 - Math.floor(product.rating || 1)).fill(0).map((el, index) => (
                      <Box key={index} m="0px 1px">
                        <FaStar color="grey" />
                      </Box>
                    ))}
                  </Flex>
                </Text>
              </Box>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Women;
