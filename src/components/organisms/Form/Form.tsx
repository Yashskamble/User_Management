import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { AppDispatch, RootState } from "../../../store/store";
import { addUser, editUser, clearSelectedUser } from "../../../store/usersSlice";

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

  const selectedUser = useSelector((state: RootState) => state.users.selectedUser);

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

      if (selectedUser) {
        dispatch(editUser(values));
        dispatch(clearSelectedUser());
      } else {
        dispatch(addUser(values));
      }

      removeLocalStorage(LOCAL_STORAGE_KEYS.FORM_DATA);
      navigate("/");
    },
  });

  useEffect(() => {
    if (selectedUser) {
      formik.setValues(selectedUser);
    } else {
      const stored = getLocalStorage(LOCAL_STORAGE_KEYS.FORM_DATA);
      if (stored) formik.setValues(stored);
    }
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading || selectedUser) return;
    const debounce = setTimeout(() => {
      setLocalStorage(LOCAL_STORAGE_KEYS.FORM_DATA, formik.values);
    }, 300);
    return () => clearTimeout(debounce);
  }, [formik.values]);

  if (!isLoading) return null;

  return (
    <div className={styles.formPage}>
      <Header label={selectedUser ? "Edit User" : "Add User"} />
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
          <Button label={selectedUser ? "Update" : "Submit"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
