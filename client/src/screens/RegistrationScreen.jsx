import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
  AlertIcon,
  AlertTitle,
  Alert,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import TextField from "./TextField";
import PasswordTextField from "./PasswordTextField";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link as ReactLink } from "react-router-dom";
import { register } from "../redux/actions/userActions";

const RegistrationScreen = () => {
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = "/products";
  const toast = useToast();

  const headingBR = useBreakpointValue({ base: "xs", md: "sm" });
  const boxBR = useBreakpointValue({ base: "transparent", md: "bg-surface" });

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
      toast({
        description: "Account created. Welcome aboard. ",
        status: "success",
        isClosable: true,
      });
    }
  }, [userInfo, redirect, error, navigate, toast]);
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("A name is required"),
        email: Yup.string()
          .email("Invalid email.")
          .required("An email address is required"),
        password: Yup.string()
          .min(1, "password is short- contail atleast 1 character")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .min(1, "password is short- contail atleast 1 character")
          .required("Password is required")
          .oneOf([Yup.ref("password"), null], "Password must match."),
      })}
      onSubmit={(values) => {
        dispatch(register(values.name, values.email, values.password));
      }}
    >
      {(formik) => (
        <Container
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", md: "8" }}
          maxH="4xl"
        >
          <Stack spacing="8">
            <Stack spacing="8">
              <Stack spacing={{ base: "1", md: "3" }} textAlign="center">
                <Heading size={headingBR}>Create an account</Heading>
                <HStack spacing="1" justify="center">
                  <Text color="muted">Already a user?</Text>
                  <Button
                    as={ReactLink}
                    to="/registration"
                    variant="link"
                    colorScheme="orange"
                  >
                    Sign in
                  </Button>
                </HStack>
              </Stack>
            </Stack>
            <Box
              py={{ base: "0", md: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={{ boxBR }}
              boxShadow={{ base: "none", md: "xl" }}
            >
              <Stack spacing="6" as="form" onSubmit={formik.handleSubmit}>
                {error && (
                  <Alert
                    status="error"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                  >
                    <AlertIcon />
                    <AlertTitle>Sorry</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <Stack spacing="5">
                  <FormControl>
                    <TextField
                      type="text"
                      name="name"
                      placeholder="Your first and last name"
                      label="Full name"
                    />
                    <TextField
                      type="text"
                      name="email"
                      placeholder="you@example.com"
                      label="Email"
                    />
                    <PasswordTextField
                      type="password"
                      name="password"
                      placeholder="your password"
                      label="password"
                    />
                    <PasswordTextField
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm passwordyour password"
                      label="password"
                    />
                  </FormControl>
                </Stack>
                <Stack spacing="6">
                  <Button
                    colorScheme="orange"
                    size="lg"
                    fontSize="md"
                    isLoading={loading}
                    type="submit"
                  >
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      )}
    </Formik>
  );
};

export default RegistrationScreen;
