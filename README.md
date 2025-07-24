# User Management UI

A modular, responsive React + TypeScript application for managing user details. Built with Formik, Yup, Redux Toolkit, and localStorage for a seamless and offline-friendly form experience.

---

## Overview

This app allows users to:

- Add new users via a dynamic form
- Edit existing users from a table view
- Persist form state across reloads using localStorage
- Validate inputs with `Yup` and prevent invalid submissions

---

## Features

- Reusable form components (`InputFields`, `Form`)
- Form validation using **Formik + Yup**
- Persistent storage via `localStorage`
- State management with **Redux Toolkit**
- Built-in validation for contact and pincode fields
- Navigation between pages using **React Router v6**
- Accessible and semantic table for user listing

---

## Tech Stack

| Category         | Tool/Library             |
| ---------------- | ------------------------ |
| Framework        | React + TypeScript       |
| Routing          | React Router             |
| State Management | Redux Toolkit            |
| Form Handling    | Formik                   |
| Validation       | Yup                      |
| Styling          | CSS Modules              |
| Persistence      | LocalStorage             |
| Utilities        | Custom utils & constants |

---

## Folder Structure

```
src/
├── components/
│ ├── atoms/ # Basic reusable UI components (Button, Header)
│ ├── molecules/ # Combined form elements (InputFields)
│ ├── organisms/ # Larger UI blocks (Form, Table)
│ └── pages/ # Route-level components (Users, AddUser)
├── constants/ # Static constants (table headers, field configs)
├── store/ # Redux store setup and slices
├── types/ # TypeScript type definitions
├── utils/ # Utility functions (localStorage, validation helpers)
├── validation/ # Yup validation schemas
├── App.tsx # Main routing logic
├── index.tsx # Entry point
└── index.css # Global styles
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-management-ui.git
cd user-management-ui
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm start
```

The app will be available at http://localhost:3000.

---

### Form Structure & Validation

| Field       | Validation Rules                       |
| ----------- | -------------------------------------- |
| Full Name   | Required, only letters and spaces      |
| Email       | Required, must be a valid email        |
| Contact No. | Required, exactly 10 digits            |
| Address     | Required, min 5 characters             |
| City        | Required, only letters                 |
| State       | Required, must be selected from a list |
| Pincode     | Required, exactly 6 digits             |

All validation is handled using Yup schemas integrated with Formik.

---

### State Management

This app uses Redux Toolkit for global state and localStorage for data persistence.

- usersSlice.ts: Stores user list and selected user.

- store.ts: Redux store configuration.

- localStorageUtiltiy.ts: Handles get/set/remove logic.

Data persists even after page reloads using store.subscribe().

---

### Deployment
The app is live on Vercel:

Live Demo: https://user-management-khaki-pi.vercel.app

---
