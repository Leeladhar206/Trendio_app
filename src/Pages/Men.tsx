import React, { useState, useEffect } from 'react';
import './Men.css';
import {
  Box,
  Container,
  Stack,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Skeleton,
  Checkbox,
  Divider,
  Select, // Import Skeleton component
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


const renderStarRating = (rating: number) => {
  const maxRating = 5;
  const filledStars = Math.round(rating);
  const emptyStars = maxRating - filledStars;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={`filled-star-${i}` } className="star">&#fbfbfb33;</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-star-${i}`} className="star">&#211e1944;</span>);
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
  const [loading, setLoading] = useState(true); // Add loading state


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://handy-string-backend.onrender.com/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data.filter((product: Product) => product.gender === "Men"));
          setLoading(false);
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error while fetching product data:', error);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://handy-string-backend.onrender.com/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.filter((product: Product) => product.gender === "Men"));
        setLoading(false); // Set loading to false when data is loaded
      } else {
        console.error('Failed to fetch product data');

      }
    } catch (error) {
      console.error('Error while fetching product data:', error);
    }
  };
  const handleChange=(e:React.FormEvent<HTMLDivElement>)=>{
const {value}=e.target;
console.log(value)
  }
  useEffect(() => {
    fetchProducts();
  }, []);



  const menProducts: Product[] = products.filter(
    (product: Product) => product.gender==='Men'
  );

  return (
    <Box maxW="box.lg" display={"flex"} >
      <Box py={8} mt={5}mb={10} pt={20} borderRight={".2px solid whitesmoke"} w={"25%"}>
        <Heading as="i" fontSize={"xl"} ml={8} mb={5} >Filter By Brands</Heading>
        <Box ml={8} mb={5}>
        <Stack spacing={[1, 5]} direction={['column',"column", 'row']} onChange={handleChange}>
    <Checkbox value='H&M' checked>H&M</Checkbox>
    <Checkbox value="Levi's" checked>LEVI'S</Checkbox>
    <Checkbox value='gap'checked>GAP</Checkbox>
    
  </Stack>
  <Stack spacing={[1, 5]} direction={['column',"column", 'row']} onChange={handleChange}>
    <Checkbox value='Adidas'checked>ADDIDAS</Checkbox>
    <Checkbox value="Calvin Klein"checked>Calvin Klein</Checkbox>
    <Checkbox value='Old Navy'checked>Old Navy</Checkbox>
  </Stack>
  <Stack spacing={[1, 5]} direction={['column','column', 'row']} onChange={handleChange}>
  <Checkbox value='Zara'checked>ZARA</Checkbox>
    <Checkbox value='Forever 21'checked>Forever 21</Checkbox>
    <Checkbox value='Express'checked>Express</Checkbox>
      </Stack>
        </Box>
<Divider/>


        <Heading as="i" mt={20}fontSize={"xl"}  ml={8}>Filter By Material</Heading>
        <Box ml={8} mt={5} mb={5}>
        <Select placeholder='Select Category'>
  <option value='Cotton'>Cotton</option>
  <option value='Silk'>Silk</option>
  <option value='Denim'>Denim</option>
  <option value='Cotton'>Cashmere</option>
  <option value='Cotton Blend'>Cotton Blend</option>
  <option value='Polyester'>Polyester</option>
  <option value='Olive'>Olive</option>
  <option value='Flannel'>Flannel</option>
</Select>
        </Box>

      </Box>

    <Container maxW="container.lg" py={8} pt={20}>
      <Heading as="h1" mb={4}>
        Men's Clothing
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {loading ? ( // Display skeletons when loading
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
          menProducts.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={product.images[0]} alt={product.name} />
              <Box p={4} >
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
    </Box>
  );
};

export default Men;
