import "./assets/css/main.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import SignIn from "./routes/SignIn";
import User from "./routes/User"

export default function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
