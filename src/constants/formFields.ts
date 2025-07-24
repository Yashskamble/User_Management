import { FieldConfig } from "../types/formTypes";

export const fieldConfig: FieldConfig[] = [
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
