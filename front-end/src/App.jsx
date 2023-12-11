import "./assets/css/main.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/Errorpage/";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import PrivateRoute from "./components/PrivateRoute";

// import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
