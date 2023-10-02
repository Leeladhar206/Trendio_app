import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
  useToast,
  FormControl,
  Select,
  Switch,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  editCustomerData,
  getCustomersData,
} from "../../Redux/productReducer/action";

const initialState = {
  f_name: "",
  l_name: "",
  email: "",
  password: "",
  token: "",
  admin: false,
};

export const Customers = () => {
  const customerData = useSelector((store) => store.productReducer.customers);

  const [update, setUpdate] = useState(false);
  const [product, setProduct] = useState(initialState);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    getAllData();
  }, [dispatch, update]);

  const getAllData = () => {
    dispatch(getCustomersData());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setProduct({ ...product, [name]: name == "admin" ? !value : value });

    if (name === "admin") {
      setProduct({ ...product, admin: !product.admin });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSingleCustomer = (id) => {
    const singleProduct = customerData.find((e) => e.id === +id);
    setProduct(singleProduct);

    console.log(singleProduct);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();

    dispatch(deleteCustomer(id));
    getAllData();

    setUpdate(!update);

    toast({
      title: "Customer Deleted",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();

    setProduct(initialState);
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    console.log(id, product, "customer");

    dispatch(editCustomerData(id, product));

    getAllData();

    setUpdate(!update);

    toast({
      title: "Edited Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setProduct(initialState);
  };

  //   console.log(customerData)

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
          {customerData.map((product) => (
            <Box>
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                w="90%"
              >
                <Box w={"80%"} m="auto">
                  <Image
                    src={
                      "https://i.pinimg.com/564x/0a/3d/4c/0a3d4c9c14442f02a6bcee99dba81d7c.jpg"
                    }
                    alt={product.name}
                  />
                </Box>
                <Box>
                  <Box
                    p={4}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Heading as="h4" size="sm">
                      {product.f_name + product.l_name}
                    </Heading>
                    <Text>Email:{product.email}</Text>
                    <Text fontSize={"md"} fontWeight={600}>
                      Admin Status:{" "}
                      {product.admin ? (
                        <span style={{ color: "green" }}>YES</span>
                      ) : (
                        <span style={{ color: "red" }}>NO</span>
                      )}
                    </Text>
                  </Box>
                  <Flex justifyContent="space-between" p={4} mt={-3}>
                    <Button
                      type="button"
                      colorScheme="blue"
                      size="sm"
                      onClick={() => handleSingleCustomer(product.id)}
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
        borderRadius="md"
        w={{ base: "80%", md: "40%" }}
        m="auto"
        p={2}
        display="flex"
        mt={6}
      >
        <Box w={"100%"} p={2}>
          <Text
            fontSize="2xl"
            fontWeight={600}
            textAlign="center"
            mb={2}
            mt={-2}
          >
            Edit Customer
          </Text>
          <form onSubmit={handleSubmit}>
            <Box borderWidth="2px" p={4} mb={4}>
              <Grid templateColumns="repeat(1, 1fr)" gap={4}>
                <FormControl>
                  <Input
                    type="text"
                    name="f_name"
                    value={product.f_name}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    name="l_name"
                    value={product.l_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </FormControl>

                <FormControl>
                  <Input
                    type="email"
                    name="email"
                    value={product.email}
                    onChange={handleChange}
                    placeholder="Customer Email"
                  />
                </FormControl>

                <FormControl>
                  <Input
                    type="text"
                    name="token"
                    value={product.token}
                    onChange={handleChange}
                    placeholder="Token"
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
              </Grid>
            </Box>
            <Box borderWidth="2px" p={4} mb={6}>
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"xl"} fontWeight={600}>
                  Make Customer as Admin
                </Text>

                <Switch
                  colorScheme="red"
                  size="lg"
                  name="admin"
                  isChecked={product.admin}
                  onChange={(_, newValue) =>
                    handleChange({ target: { name: "admin", value: newValue } })
                  }
                />
              </Flex>
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
