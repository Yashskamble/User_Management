import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "../../../store/store";
import { addUser } from "../../../store/usersSlice";

import Button from "../../atoms/Button/Button";
import Header from "../../atoms/Header/Header";
import InputFields from "../../molecules/InputFields/InputFields";

import styles from "./Form.module.css";

type FormData = {
  fullName: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

type FieldConfig = {
  name: keyof FormData;
  label: string;
  type?: "textarea" | "select";
  options?: string[];
};

const fieldConfig: FieldConfig[] = [
  { name: "fullName", label: "Full Name" },
  { name: "email", label: "Email Address" },
  { name: "contact", label: "Contact Number" },
  { name: "address", label: "Address Line", type: "textarea" },
  { name: "city", label: "City" },
  {
    name: "state",
    label: "State",
    type: "select",
    options: [
      "Maharashtra",
      "Gujarat",
      "Goa",
      "West Bengal",
      "Karnataka",
      "Andhra Pradesh",
      "Punjab",
      "Kerala",
      "Rajasthan",
      "Tamil Nadu",
    ],
  },
  { name: "pincode", label: "Pincode" },
];

const LOCAL_STORAGE_KEY = "formData";

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setFormData(JSON.parse(stored));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, hasLoaded]);

  const validateField = (field: keyof FormData, value: string) => {
    const input = value.trim();
    let err = "";

    switch (field) {
      case "fullName":
        if (!input) err = "Full Name is required";
        else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(input))
          err = "Please enter a valid full name";
        break;

      case "email":
        if (!input) err = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input))
          err = "Enter a valid email";
        break;

      case "contact":
        if (!input) err = "Contact Number is required";
        else if (!/^\d{10}$/.test(input))
          err = "Enter a valid 10-digit mobile number";
        break;

      case "address":
        if (!input) err = "Address is required";
        else if (input.length < 5)
          err = "Address must be at least 5 characters";
        break;

      case "city":
        if (!input) err = "City is required";
        else if (!/^[a-zA-Z\s]+$/.test(input))
          err = "City must contain only letters";
        break;

      case "state":
        if (!input) err = "Please select a state";
        break;

      case "pincode":
        if (!input) err = "Pincode is required";
        else if (!/^\d{6}$/.test(input))
          err = "Pincode must be a 6-digit number";
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: err }));
    return err === "";
  };

  const validateAll = () => {
    const allValid = Object.entries(formData).every(([key, val]) =>
      validateField(key as keyof FormData, val)
    );
    return allValid;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === "contact" && !/^\d{0,10}$/.test(value)) return;
    if (field === "pincode" && !/^\d{0,6}$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      dispatch(addUser(formData));
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      navigate("/");
    }
  };

  return (
    <div className={styles.formPage}>
      <Header label="Add User" />
      <form className={styles.form} onSubmit={handleSubmit}>
        {fieldConfig.map((field) => (
          <InputFields
            key={field.name}
            label={field.label}
            value={formData[field.name]}
            onChange={(val) => handleChange(field.name, val)}
            onBlur={() => validateField(field.name, formData[field.name])}
            error={errors[field.name]}
            textarea={field.type === "textarea"}
            select={field.type === "select"}
            options={field.type === "select" ? field.options : undefined}
          />
        ))}
        <div className={styles.submitBtn}>
          <Button label="Submit" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};

export default Form;
