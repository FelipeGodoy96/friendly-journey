import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}
