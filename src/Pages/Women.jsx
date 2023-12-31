import React, { useEffect, useState } from 'react';
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
  Button,
} from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"
import Sidebar from "../Components/Sidebar"

const Women = () => {
  const products = useSelector((store) => store.productReducer.products);
  const loading = useSelector((store) => store.productReducer.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [order, setSort] = useState(searchParams.get('order') || '');
  const [showSidebar, setShowSidebar] = useState(true); // Control sidebar visibility

  const paramsobj = {
    params: {
      brand: searchParams.getAll('brand'),
      category: searchParams.getAll('category'),
      material: searchParams.get('material'),
      color: searchParams.get('color'),
      _sort: searchParams.get('order') && 'price',
      _order: searchParams.get('order'),
    },
  };

  useEffect(() => {
    // Dispatch the action to get data
    dispatch(getData(paramsobj))
  }, [searchParams])

  const womenProducts = products.filter((product) => product.gender === 'Women');

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <Box maxW="100%" display="flex">
      {/* Conditional rendering of the sidebar */}
      {showSidebar && <Sidebar order={order} setSort={setSort} />}

      <Container maxW="container.lg" pt={8} alignItems="center">
        <Box display="flex" justifyContent="space-between">
          <Heading as="h1" mb={6} className='heading'>
            Women's Clothing
          </Heading>
          <Button mr={2}> 
          <button onClick={handleToggleSidebar}>
        {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
      </Button>
          <Select
            placeholder="Sort By Price"
            value={order}
            borderColor="gray"
            mb={5}
            w={["55%", "40%", "20%"]}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </Select>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} w={["100%","100%","100%"]} pl={3} >
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={4}
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Skeleton height="200px" />
                <Skeleton height="20px" mt={2} />
                <Skeleton height="20px" mt={2} />
                <Skeleton height="20px" mt={2} />
              </Box>
            ))
          ) : (
            womenProducts.map((product) => (
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                onClick={() => navigate(`/product/${product.id}`)}
                style={{ cursor: 'pointer' }}
                p={4}
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                }}
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
                      {new Array(Math.floor(product.rating || 1))
                        .fill(0)
                        .map((el, index) => (
                          <Box key={index} m="0px 1px">
                            <FaStar color="#ffb128" />
                          </Box>
                        ))}
                      {new Array(5 - Math.floor(product.rating || 1))
                        .fill(0)
                        .map((el, index) => (
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
      {/* Button to toggle sidebar visibility */}
     
    </Box>
  )
}

export default Women
