import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

interface ListHeaderProps {
  children: React.ReactNode;
}

const ListHeader: React.FC<ListHeaderProps> = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

interface SocialButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('gray.200', 'gray.700')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <FontAwesomeIcon icon={children as any} /> {/* Use the appropriate icon here */}
    </chakra.button>
  );
};

const Footer: React.FC = () => {
  return (
    <Box
      bg="gray.100" // Grey background
      color="black" // Black text color
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Products</ListHeader>
            <Box as="a" href={'men'}>
              Men
            </Box>
            <Box as="a" href={'women'}>
              Women
            </Box>
            <Box as="a" href={'accessories'}>
              Accessories
            </Box>
            <Box as="a" href={'about'}>
              About Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Safety Center
            </Box>
            <Box as="a" href={'#'}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Cookies Policy
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Law Enforcement
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <Link to="https://play.google.com/store/games?device=windows&pli=1">
              <Image src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nxnz2ypv3wx0aokd84cj.png' width="10rem" />
            </Link>
            <Link to="https://www.apple.com/app-store/">
              <Image src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/imqahj6chipcfdcv8zdk.png' width="10rem" />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>
            <Image src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yesn3i1u9al31fgqrulk.png' width="8rem" /> ©. All rights reserved
          </Text>
          <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
              <TwitterIcon/>
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
            <InstagramIcon/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;



