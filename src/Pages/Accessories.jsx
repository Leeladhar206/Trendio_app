import React, { useEffect } from 'react'; // Removed unused useState and useSelector
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Men.css';
import {getAccessories} from "../Redux/productReducer/action"

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';





const Accessories = () => {
  const accessories = useSelector((store) => store.productReducer.accessories);
  const loading = useSelector((store) => store.productReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccessories);
  }, [dispatch]);



  return (
    <Container maxW="container.lg" py={8} pt={20}>
      <Heading as="h1" mb={4}>
       Accessories
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Skeleton height="200px" />
              <Skeleton height="20px" mt={2} />
              <Skeleton height="20px" mt={2} />
              <Skeleton height="20px" mt={2} />
            </Box>
          ))
        ) : (
          accessories.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              onClick={() => navigate(`/accessory/${product.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <Image src={product.images[0]} alt={product.name}  
                onClick={() => navigate(`/accessory/${product.id}`)}
                />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text>Price: ${product.price}</Text>
                <Text>Brand: {product.brand}</Text>
                <Text>
                <Flex alignItems={"center"} fontSize={16} m={"10px auto"}>
        Rating:  {new Array(Math.floor(product.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="#ffb128" />
            </Box>
          ))}
          {new Array(5 - Math.floor(product.rating || 1)).fill(0).map((el, index) => (
            <Box key={index} m={"0px 1px"}>
              <FaStar color="grey" />
            </Box>
          ))}
          {/* <Box ml={"10px"} alignItems={"center"}>
            <Text fontSize={"15px"} color={"#5c676d"}>
              ({product?.reviews?.length} customer reviews)
            </Text>
          </Box> */}
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

export default Accessories;
