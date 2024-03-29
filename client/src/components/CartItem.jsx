import {
  CloseButton,
  Flex,
  Select,
  useColorMode as mode,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../redux/actions/cartActions";

const CartItem = ({ cartItem }) => {
  const { name, image, price, stock, quantity, id } = cartItem;
  const dispatch = useDispatch();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          w="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
          </Stack>
        </Box>
      </Stack>
      <Flex
        width="full"
        mt={{ base: "4", md: "0" }}
        align={{ base: "center", md: "baseline" }}
        justify="space-between"
        display="flex"
      >
        <Select
          maxW="64px"
          focusBorderColor={mode("orange.500", "orange.200")}
          value={quantity}
          onChange={(e) => {
            dispatch(addCartItem(id, e.target.value));
          }}
        >
          {[...Array(stock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </Select>
        <Text fontWeight="bold">${price}</Text>
        <CloseButton onClick={() => dispatch(removeCartItem(id))}/>
      </Flex>
    </Flex>
  );
};

export default CartItem;
