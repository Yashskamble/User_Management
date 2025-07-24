export type FormData = {
  fullName: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

export type FieldConfig = {
  name: keyof FormData;
  label: string;
  type?: "textarea" | "select";
  options?: string[];
};
