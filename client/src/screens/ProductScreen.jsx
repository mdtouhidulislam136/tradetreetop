import React from "react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, Spinner, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing="30px" justify="center" minHeight="100hv">
      {loading ? (
        <Stack direction='row' spacing={4}>
          <Spinner mt={20} thickness="2px" emptyColor="gray.200" color="orange.500" size='xl'/>
        </Stack>
      
      ) : error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Sorry</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
            
        </Alert>
      ) : (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w="250px" h="550px">
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};

export default ProductScreen;
