import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Input } from '@chakra-ui/input';
import { Field, useField } from 'formik';

const TextField = ({ label, type, name, placeholder }) => {
    const [field, meta] = useField({ label, type, name, placeholder });
  return (
      <FormControl isInvalid={meta.error && meta.touched} md='6'>
          <FormLabel noOfLines={1}>{label}</FormLabel>
          <Field as={Input} {...field} type={type} name={name} placeholder={placeholder} />
          <FormErrorMessage>{meta.error}</FormErrorMessage>
          
    </FormControl>
  )
}

export default TextField