import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  Select,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';




const Men = () => {
  
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.loading);
  const navigate = useNavigate();
 
const [searchParams]=useSearchParams()
const [order,setSort]=useState(searchParams.get("order")||"")
//console.log(order)
const paramsobj={
  params:{
    brand:searchParams.getAll("brand"),
    category:searchParams.getAll("category"),
    material:searchParams.get("material"),
    color:searchParams.get("color"),
    _sort:searchParams.get("order") && "price",
    _order:searchParams.get("order"),
  }
}
 
// console.log(paramsobj)
  const menProducts = products.filter(
    (product) => product.gender === 'Men'
  );

  const renderStarRating = (rating) => {
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
  useEffect(() => {
    // Dispatch the action to get data
    dispatch(getData(paramsobj));
  }, [searchParams]);

  //position: relative; /* Container needs a position */
  //height: 100%; /* Set a height to create a scrolling container */
  // overflow-y: auto;
  return (
    <Box maxW="box.lg" display={"flex"} >
      <Sidebar order={order} setSort={setSort}/>
    <Container maxW="container.lg" py={8} pt={20} >
      <Box display={"flex"} justifyContent={"space-between"}>
      <Heading as="h1" mb={4} >
        Men's Clothing
      </Heading>
<Select placeholder='Sort By Price' value={order} borderColor='gray' w={["50%","30%","25%"]} onChange={(e)=>setSort(e.target.value)}> 
  <option value={"asc"}>Low to High</option>
  <option value={"desc"}>High to Low</option>
</Select>
      </Box>

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
          menProducts.map((product) => (
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
    </Box>
  );
};

export default Men;
