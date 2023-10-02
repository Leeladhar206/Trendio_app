import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Grid,
  Flex,
  Select,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postData } from "../../Redux/productReducer/action";


const initialState = {
  gender: "",
  category: "",
  name: "",
  price: "",
  images: [],
  brand: "",
  size: ["S", "M", "L", "XL"],
  material: "",
  color: "White/Orange",
  description: "",
  rating: "No ratings Yet",
  reviews: "No Reviews Yet",
};

function AddProduct () {
  const [product, setProduct] = useState(initialState);

  const [inputImages, setInputImages] = useState({ images: ["", "", ""] });

  

  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]:name=="price"? +value : value });
  };

  const handleImages = (e, index) => {
    const newImages = [...inputImages.images];
    newImages[index] = e.target.value;
    setInputImages({ ...inputImages, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...product };
    newData.images = inputImages.images;

    console.log(newData, "add");

    dispatch(postData(newData));

    toast({
      title: "Added Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setProduct(initialState);
    setInputImages({ images: ["", "", ""] });
  };

  const handleReset = (e) => {
    e.preventDefault();

    setProduct(initialState);
    setInputImages({ images: ["", "", ""] });
  };

  return (
    <Box
      boxShadow="lg"
      borderRadius="md"
      w="100%"
      m={"auto"}
      p={10}
      pt={20}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      className='main-container'
    >
      <Box
        w={{ base: "100%", lg: "80%" }}
        borderWidth="2px" borderColor={"red.200"}
        borderRadius={"md"}
        p={{ base: 2, lg: 8 }}
      >
        <Text
          fontSize="2xl"
          fontWeight={600}
          textAlign={"center"}
          mb={2}
          mt={-2}
        >
          Add New Product
        </Text>

        <form onSubmit={handleSubmit}>
          <Box borderWidth="1px" p={5} mb={4}>
            <Grid templateColumns="repeat(6, 1fr)" gap={4}>
              <FormControl
                gridColumn={{ base: "span 6", md: "span 3", lg: "span 2" }}
              >
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                gridColumn={{ base: "span 6", md: "span 3", lg: "span 2" }}
              >
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                gridColumn={{ base: "span 6", md: "span 3", lg: "span 2" }}
              >
                <FormLabel>Gender</FormLabel>
                <Select
                  name="gender"
                  value={product.gender}
                  onChange={handleChange}
                >
                  <option value="Select">Select</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </Select>
              </FormControl>

              <FormControl
                gridColumn={{ base: "span 6", md: "span 3", lg: "span 2" }}
              >
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                gridColumn={{ base: "span 6", md: "span 3", lg: "span 2" }}
              >
                <FormLabel>Brand</FormLabel>
                <Input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl
                gridColumn={{ base: "span 6", md: "span 3", lg: "span 2" }}
              >
                <FormLabel>Material</FormLabel>
                <Input
                  type="text"
                  name="material"
                  value={product.material}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Box>

          <Box borderWidth="1px" p={3} mb={4}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={6}>
              <FormControl
                gridColumn={{ base: "span 3", md: "span 2", lg: "span 1" }}
              >
                <FormLabel>Image 1</FormLabel>
                <Input
                  type="text"
                  name="images"
                  value={inputImages.images[0]}
                  onChange={(e) => handleImages(e, 0)}
                />
              </FormControl>
              <FormControl
                gridColumn={{ base: "span 3", md: "span 2", lg: "span 1" }}
              >
                <FormLabel>Image 2</FormLabel>
                <Input
                  type="text"
                  name="images"
                  value={inputImages.images[1]}
                  onChange={(e) => handleImages(e, 1)}
                />
              </FormControl>
              <FormControl
                gridColumn={{ base: "span 3", md: "span 2", lg: "span 1" }}
              >
                <FormLabel>Image 3</FormLabel>
                <Input
                  type="text"
                  name="images"
                  value={inputImages.images[2]}
                  onChange={(e) => handleImages(e, 2)}
                />
              </FormControl>
            </Grid>
          </Box>

          <Box borderWidth="1px" p={3} mb={6}>
            <FormControl mb={6}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                value={product.description}
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <Flex justifyContent="space-between">
            <Button
              type="button"
              colorScheme="blue"
              onClick={handleReset}
              size="lg"
            >
              Reset
            </Button>
            <Button
              type="submit"
              colorScheme="teal"
              onClick={handleSubmit}
              size="lg"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default AddProduct;