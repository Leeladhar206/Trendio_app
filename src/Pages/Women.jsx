
import React, { useEffect,useState } from 'react'; // Removed unused useState and useSelector

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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



const Women = () => {
  const products = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams]=useSearchParams()
  const [order,setSort]=useState(searchParams.get("order")||"")
//console.log(searchParams)
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



  useEffect(() => {
    // Dispatch the action to get data
    dispatch(getData(paramsobj));
  }, [searchParams]);

  const WomenProducts = products.filter(
    (product) => product.gender === 'Women'
  );
  console.log(WomenProducts)
  return (
    <Box maxW="box.lg" display={"flex"}>
      <Sidebar order={order} setSort={setSort}/>
    <Container maxW="container.lg" py={8} pt={20} alignItems="center">
    <Box display={"flex"} justifyContent={"space-between"}>
      <Heading as="h1" mb={4} className='heading'>
        Women's Clothing
      </Heading>
<Select placeholder='Sort By Price' value={order} borderColor='gray' w={["55%","40%","20%"]} onChange={(e)=>setSort(e.target.value)}> 
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
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
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
    </Box>
  );
};

export default Women;
