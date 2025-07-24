import * as yup from "yup";
import { FormData } from "../types/formTypes";

export const formValidationSchema: yup.ObjectSchema<FormData> = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Full Name is required")
      .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/, "Please enter a valid full name"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
    contact: yup
      .string()
      .required("Contact Number is required")
      .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
    address: yup
      .string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters"),
    city: yup
      .string()
      .required("City is required")
      .matches(/^[a-zA-Z\s]+$/, "City must contain only letters"),
    state: yup.string().required("Please select a state"),
    pincode: yup
      .string()
      .required("Pincode is required")
      .matches(/^\d{6}$/, "Pincode must be a 6-digit number"),
  });
