import React from 'react';
import { Box, Flex, Spacer, ChakraProvider, CSSReset, extendTheme, theme, Stack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom';
// import EditProducts from './EditProducts'; // Create these components
// import AddProducts from './AddProducts'; // Create these components
// import AddAdmin from './AddAdmin'; // Create these components
// import UserBookings from './UserBookings'; // Create these components

const customTheme = extendTheme({
  ...theme,
});

const Admin = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Flex>
          {/* Sidebar */}
          <Box
            w="250px"
            h="100vh"
            bg="gray.200"
            p={4}
            position="fixed"
            top={0}
            left={0}
          >
            <Link to="/admin/edit-products">Edit Products</Link>
            <Link to="/admin/add-products">Add Products</Link>
            <Link to="/admin/add-admin">Add Admin</Link>
            <Link to="/admin/user-bookings">User Bookings</Link>
          </Box>

          {/* Content */}
          <Box ml="250px" p={4} width="100%">
            <Box>
              <Route path="/admin/edit-products">
                {/* <EditProducts /> */}
              </Route>
              <Route path="/admin/add-products">
                {/* <AddProducts /> */}
              </Route>
              <Route path="/admin/add-admin">
                {/* <AddAdmin /> */}
              </Route>
              <Route path="/admin/user-bookings">
                {/* <UserBookings /> */}
              </Route>
            </Box>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default Admin;
