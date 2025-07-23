import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Users from "./components/pages/Users/Users";
import AddUser from "./components/pages/AddUser/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
