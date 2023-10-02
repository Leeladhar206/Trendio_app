import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  Grid,
  Flex,
  Select,
  useToast,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  editProduct,
  getAdminData,
} from "../../Redux/productReducer/action";

const initialState = {
  gender: "",
  category: "",
  name: "",
  price: "",
  images: ["", "", ""],
  brand: "",
  size: ["S", "M", "L", "XL"],
  material: "",
  color: "White/Orange",
  description: "",
  rating: "No ratings Yet",
  reviews: "No Reviews Yet",
};

const EditProduct = () => {
  const storeData = useSelector((store) => store.productReducer.adminData);

  const [product, setProduct] = useState(initialState);
  const [inputImages, setInputImages] = useState({ images: ["", "", ""] });
  const [update, setUpdate] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getAllData();
  }, [dispatch, update]);

  const getAllData = () => {
    dispatch(getAdminData());
  };

  const handleSingleData = (id) => {
    const singleProduct = storeData.find((e) => e.id === +id);
    setProduct(singleProduct);
    setInputImages({ images: [...singleProduct.images] });
    // console.log(singleProduct, "hi");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name == "price" ? +value : value });
  };

  const handleImages = (e, index) => {
    const newImages = [...inputImages.images];
    newImages[index] = e.target.value;
    setInputImages({ ...inputImages, images: newImages });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    const newData = { ...product };
    newData.images = inputImages.images;

    console.log(id, newData, "add");

    dispatch(editProduct(id, newData));

    getAllData();

    setUpdate(!update);

    toast({
      title: "Edited Successfully",
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

  const handleDelete = (e, id) => {
    e.preventDefault();

    dispatch(deleteProduct(id));
    // console.log(id,)
    getAllData();

    setUpdate(!update);

    toast({
      title: "Product Deleted",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  console.log(storeData, "edit");

  return (
    <Box
      className="main-container"
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Box overflowY="scroll" height="100vh" w={{ base: "100%", lg: "60%" }}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
          }}
          w="90%"
          m="auto"
          pt={{ base: "2", md: "6" }}
          gap={4}
        >
          {storeData.map((product) => (
            <Box>
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                style={{ cursor: "pointer" }}
                w="90%"
              >
                <Box>
                  <Image src={product.images[0]} alt={product.name} />
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box
                    p={4}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Heading as="h4" size="sm" mb={2}>
                      {product.name}
                    </Heading>
                    <Text>Price: ${product.price}</Text>
                    <Text>Brand: {product.brand}</Text>
                  </Box>
                  <Flex
                    flexDirection={"column"}
                    justifyContent="space-between"
                    p={4}
                  >
                    <Button
                      type="button"
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleSingleData(product.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      type="submit"
                      colorScheme="red"
                      onClick={(e) => handleDelete(e, product.id)}
                      size="sm"
                    >
                      Delete
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box
        boxShadow="lg"
        borderRadius="md"
        w={{ base: "80%", md: "40%" }}
        m="auto"
        p={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box w={"100%"} p={2}>
          <Text
            fontSize="2xl"
            fontWeight={600}
            textAlign="center"
            mb={2}
            mt={-2}
          >
            Edit Product
          </Text>
          <form onSubmit={handleSubmit}>
            <Box borderWidth="2px" p={4} mb={4}>
              <Grid templateColumns="repeat(1, 1fr)" gap={4}>
                <FormControl>
                  <Input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="Product category"
                  />
                </FormControl>
                <FormControl>
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

                <FormControl>
                  <Input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Product Price"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                    placeholder="Product Brand"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    name="material"
                    value={product.material}
                    onChange={handleChange}
                    placeholder="Product Material"
                  />
                </FormControl>
              </Grid>
            </Box>

            <Box borderWidth="2px" p={3} mb={4}>
              <Grid templateColumns="repeat(1, 1fr)" gap={4} mb={6}>
                <FormControl>
                  <Input
                    type="text"
                    name="images"
                    value={inputImages.images[0]}
                    onChange={(e) => handleImages(e, 0)}
                    placeholder="Image 1"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    name="images"
                    value={inputImages.images[1]}
                    onChange={(e) => handleImages(e, 1)}
                    placeholder="Image 2"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    name="images"
                    value={inputImages.images[2]}
                    onChange={(e) => handleImages(e, 2)}
                    placeholder="Image 3"
                  />
                </FormControl>
              </Grid>
            </Box>

            <Box borderWidth="2px" p={5} mb={6}>
              <FormControl mb={6}>
                <Textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Product Description"
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
                colorScheme="red"
                onClick={(e) => handleSubmit(e, product.id)}
                size="lg"
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
