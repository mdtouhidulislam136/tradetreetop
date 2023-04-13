import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode as mode,
  Bage,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiFastArrow, FaArrowRight } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";

export const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(4.99).toFixed(2);
  const cartItems = useSelector((state) => state.cart);
  const { subtotal } = cartItems;
  const navigate = useNavigate;

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate("/checkout");
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="1g" padding="8" w="full">
      <Heading size="md">Order Summary</Heading>
      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
            {" "}
            Subtotal
          </Text>
          <Text fontWeight="medium">{subtotal}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
            Shipping
          </Text>
          <Text fontWeight="medium">
            {subtotal <= 1000 ? (
              standardShipping
            ) : (
              <Bage rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                free
              </Bage>
            )}
          </Text>
        </Flex>
        <Flex fontSize="lg" fontWeight="semibold">
          {subtotal <= 1000
            ? Number(subtotal) + Number(standardShipping)
            : subtotal}
        </Flex>
      </Stack>
      <Button
        as={ReactLink}
        to="/checkout"
        colorScheme="orange"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        isLoading={buttonLoading}
        onClick={() => checkoutHandler()}
      >
        Checkout
      </Button>
    </Stack>
  );
};
