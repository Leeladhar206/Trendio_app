import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box pt={20}>
      <Flex
        flexWrap="wrap"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <Box flex={{ base: '1', md: '1' }} minWidth={{ base: '100%', md: 'auto' }}>
          <Text>Fashion is a form of self-expression and autonomy at a particular period</Text>
          <Text>READ MORE</Text>
        </Box>
        <Box flex={{ base: '2', md: 'auto' }} minWidth={{ base: '100%', md: '60%' }}>
          <Text fontSize='5xl'>CLOTHES ARE</Text>
          <Text fontSize='5xl'>THE SPIRIT</Text>
          <Text fontSize='5xl'>OF FASHION</Text>
        </Box>
        <Box flex={{ base: '1', md: '1' }} minWidth={{ base: '100%', md: 'auto' }}>
          <Image
            src="https://ih1.redbubble.net/image.606787423.8929/raf,360x360,075,t,fafafa:ca443f4786.jpg"
            alt="Image 3"
            width="100%"
            height="auto"
          />
          <Text>Varsity Jacket</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default HomePage;

