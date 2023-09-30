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
} from '@chakra-ui/react';

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  category: string;
  gender: string;
  name: string;
  price: number;
  images: string[];
  brand: string;
  size: string[];
  material: string;
  color: string;
  description: string;
  rating: number;
  reviews: Review[];
}

const Men2 = () => {
  const products = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to get data
    dispatch(getData);
  }, [dispatch]);

  const menProducts: Product[] = products.filter(
    (product: Product) => product.gender === 'Men'
  );

  const renderStarRating = (rating: number) => {
    const maxRating = 5;
    const filledStars = Math.round(rating);
    const emptyStars = maxRating - filledStars;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span
          key={`filled-star-${i}`}
          className="star"
          style={{ color: '#ffb128' }}
        >
          &#9733;
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span
          key={`empty-star-${i}`}
          className="star"
          style={{ color: '#ffb128' }}
        >
          &#9734;
        </span>
      );
    }

    return <span className="star-rating">{stars}</span>;
  };

  return (
    <Container maxW="container.lg" py={8} pt={20}>
      <Heading as="h1" mb={4}>
        Men's Clothing
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
          menProducts.map((product: Product) => (
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
                  Rating: {renderStarRating(product.rating)} ({product.rating.toFixed(1)})
                </Text>
              </Box>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Men2;
