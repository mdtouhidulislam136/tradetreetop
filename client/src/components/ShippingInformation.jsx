import {
  Box,
  Heading,
  VStack,
  FormControl,
  Flex,
  Stack,
  Text,
  Radio,
  RadioGroup,
  Tooltip,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "../screens/TextField";

const ShippingInformation = () => {
  return (
    <Formik
      initialValues={{ address: "", postalCode: "", city: "", country: "" }}
      validationSchema={Yup.object({
        address: Yup.string()
          .required("This field is required.")
          .min(2, "This address is too short."),
        postalCode: Yup.string()
          .required("This field is required.")
          .min(2, "This postal code is too short."),
        city: Yup.string()
          .required("This field is required.")
          .min(2, "This city is too short."),
        country: Yup.string()
          .required("This field is required.")
          .min(2, "This country is too short."),
      })}
    >
      {(formik) => (
        <VStack as="form">
          <FormControl>
            <TextField
              name="address"
              placeholder="Street Address"
              label="Street Address"
            />
            <Flex>
              <Box flex="1" mr="10">
                <TextField
                  name="postalCode"
                  placeholder="Postal Code"
                  label="Postal Code"
                  type="number"
                />
              </Box>
              <Box flex="2">
                <TextField name="city" placeholder="City" label="City" />
              </Box>
            </Flex>
            <TextField name="country" placeholder="Country" label="Country" />
          </FormControl>
          <Box w="100%" h="180px" pr="5">
            <Heading fontSize="2xl" fontWeight="extrabold" mb="10">
              Shipping Method
            </Heading>
            <RadioGroup>
              <Stack
                direction={{ base: "column", lg: "row" }}
                align={{ lg: "flex-start" }}
              >
                <Stack pr="10" spacing={{ base: "8", md: "10" }} flex="1.5">
                  <Box>
                    <Radio value="true">
                      <Text fontWeight="bold">Express 14.99</Text>
                      <Text>Dispatched in 24 hours.</Text>
                    </Radio>
                  </Box>
                  <Stack spacing="6">Express</Stack>
                </Stack>
                <Radio value="false">
                  <Tooltip label="Free shipping for orders of $1000 or more!">
                    <Box>
                      <Text fontWeight="bold">Standard $4.99</Text>
                      <Text>Dispatched in 2 - 3 days</Text>
                    </Box>
                  </Tooltip>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </VStack>
      )}
    </Formik>
  );
};

export default ShippingInformation;
