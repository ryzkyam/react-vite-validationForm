import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";


import {
   Box,
   Button,
   Container, 
   FormControl, 
   FormLabel, 
   Input, 
   Link, 
   Stack, 
   Text,
   FormErrorMessage 
    } from '@chakra-ui/react';

const RegistrationForm = () => {

  const registerUser = () => {
    alert("form Terkirim!")
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
     username: yup.string().required().min(5).max(12),
     email: yup.string().required().email(),
     password: yup.string().required().min(8, 'Password is too short - should be 8 chars minimum.')
     .matches(
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
  
    })
  });


  const handleForm = (event) =>{
    const { target } = event
    formik.setFieldValue(target.name,  target.value)
  }
  return (
    <Container py="10" mb="96" mt="78">
    <Box
      padding="4"
      bg="white"
      border="1px solid lightgray"
      borderRadius="8px"
      mt="8px"
      boxShadow="md"
      maxW="sm"
      mx="auto"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center">
        Welcome Back!
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <FormControl isInvalid={formik.errors.username}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              name="username"
              type="text"
              onChange={handleForm}
              focusBorderColor="blue.500"
            />
          <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleForm}
              focusBorderColor="blue.500"
            />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl  isInvalid={formik.errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={handleForm}
              focusBorderColor="blue.500"
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>  
          <Button
            type="submit"
            colorScheme="blue"
            bg="blue.700"
            color="white"
            _hover={{ bg: 'blue.800' }}
            mt={4}
            w="full"
          >
            Register Account
          </Button>
        </Stack>
        <Text mt={4} textAlign="center">
          <Link href="#" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            Sign up instead
          </Link>
        </Text>
      </form>
    </Box>
  </Container>
  );
};

export default RegistrationForm;
