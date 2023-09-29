
import React, { useState, useEffect } from 'react';
import "./Men.css"
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Image,
  Text,
} from '@chakra-ui/react';

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  size: string[];
  material: string;
  color: string;
  description: string;
  rating: number;
  reviews: Review[];
}

const renderStarRating = (rating: number) => {
  const maxRating = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={`filled-star-${i}` } className="star">&#9733;</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-star-${i}`} className="star">&#9734;</span>);
  }

  return (
    <span className="star-rating">
      {stars}
    </span>
  );

};

const Men = () => {
  // State to store product data
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch product data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://handy-string-backend.onrender.com/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data.filter((product: Product) => product.category === "Men's Clothing"));
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error while fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={4}>
        Men's Clothing
      </Heading>
      <SimpleGrid columns={[1, 2, 4]} spacing={4}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading as="h2" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text>Category: {product.category}</Text>
              <Text>Price: ${product.price}</Text>
              <Text>Brand: {product.brand}</Text>
              <Text>Material: {product.material}</Text>
              <Text>Color: {product.color}</Text>
              <Text>Description: {product.description}</Text>
              <Text>
                Rating: {renderStarRating(product.rating)} ({product.rating.toFixed(1)})
              </Text>
              
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Men;
