import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import ProtectedRoutes from "./ProtectedRoutes";

function Routing() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
      </Route>
      <Route path="*" element={<h1> 404 not found </h1>} />
    </Routes>
  );
}

export default Routing;
