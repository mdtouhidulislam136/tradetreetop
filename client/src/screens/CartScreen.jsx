import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Wrap,
  WrapItem,
  Center,
  ProductCard,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";

const CartScreen = () => {
  const productList = useSelector((state) => state.products);
    const { loading, error, products } = productList;
    const color = useColorModeValue('orange.500', 'orange.200');

  return (
    <Wrap spacing="30px" justify="center" minHeight="100hv">
      {loading ? (
        <Stack direction="row" spacing={4}>
          <Spinner
            mt={20}
            thickness="2px"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Sorry</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>Your cart is empty</AlertTitle>
          <Link as={ReactLink} to="/products">
            Click here to see our products.
          </Link>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart
              </Heading>
              <Stack spacing="6">{/* CartItem */}</Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
              {/* CartOrderSummary */}
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link as={ReactLink} to="/products" color={color}>
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;
