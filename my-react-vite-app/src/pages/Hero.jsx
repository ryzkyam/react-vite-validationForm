import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

function Hero() {
  const registerUser = () => {
    alert("submit form!")
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
    <form action="" onSubmit={formik.handleSubmit} >
      <div className="hero min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse border border-solid border-gray-300 shadow-lg p-8 rounded-lg bg-white w-full max-w-sm">
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-6">Welcome Back!</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="font-medium">
                  Username
                </label>
                <input onChange={handleForm}
                  id="username"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="username"
                  
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Email" className="font-medium">
                  Email
                </label>
                <input
                  onChange={handleForm}
                  id="email"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  onChange={handleForm}
                  id="password"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  name="password"
                />
              </div>
              <button
                className="mt-4 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
                type="submit"
              >
                Register Account              </button>
              <p className="text-center mt-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up instead
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Hero;
