import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { AppDispatch } from "../../../store/store";
import { addUser } from "../../../store/usersSlice";

import Button from "../../atoms/Button/Button";
import Header from "../../atoms/Header/Header";
import InputFields from "../../molecules/InputFields/InputFields";

import { fieldConfig } from "../../../constants/formFields";
import { formValidationSchema } from "../../../validation/formValidation";
import { FormData } from "../../../types/formTypes";

import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "../../../utils/localStorageUtiltiy";
import { isValidContact, isValidPincode } from "../../../utils/fieldValidators";
import { LOCAL_STORAGE_KEYS } from "../../../constants/storageKeys";

import styles from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      contact: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      if (!formik.dirty) return;
      dispatch(addUser(values));
      removeLocalStorage(LOCAL_STORAGE_KEYS.FORM_DATA);
      navigate("/");
    },
  });

  useEffect(() => {
    const stored = getLocalStorage(LOCAL_STORAGE_KEYS.FORM_DATA);
    if (stored) formik.setValues(stored);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const debounce = setTimeout(() => {
      setLocalStorage(LOCAL_STORAGE_KEYS.FORM_DATA, formik.values);
    }, 300);
    return () => clearTimeout(debounce);
  }, [formik.values]);

  if (!isLoading) return null;

  return (
    <div className={styles.formPage}>
      <Header label="Add User" />
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        {fieldConfig.map((field) => (
          <InputFields
            key={field.name}
            label={field.label}
            value={formik.values[field.name]}
            onChange={(val) => {
              if (field.name === "contact" && !isValidContact(val)) return;
              if (field.name === "pincode" && !isValidPincode(val)) return;
              formik.setFieldValue(field.name, val);
            }}
            onBlur={() => formik.setFieldTouched(field.name, true)}
            error={
              formik.touched[field.name] && formik.errors[field.name]
                ? formik.errors[field.name]
                : ""
            }
            textarea={field.type === "textarea"}
            select={field.type === "select"}
            options={field.options}
          />
        ))}
        <div className={styles.submitBtn}>
          <Button label="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
