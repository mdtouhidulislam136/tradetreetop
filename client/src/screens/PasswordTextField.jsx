import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
import { useState } from "react";
import { InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const PasswordTextField = ({ label, type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField({ label, type, name, placeholder });
  return (
    <FormControl isInvalid={meta.error && meta.touched} md="6">
      <FormLabel noOfLines={1}>{label}</FormLabel>
      <InputGroup>
        <Field
          as={Input}
          {...field}
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
        />
        <InputRightElement h="full">
          <Button
            variant="ghost"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordTextField;
