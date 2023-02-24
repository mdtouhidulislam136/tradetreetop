import React from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { products } from "../products";
import ProductCard from "../components/ProductCard";

const ProductScreen = () => {
  return (
    <Wrap spacing="30px" justify="center" minHeight="100hv">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="250px" h="550px">
                  <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductScreen;
