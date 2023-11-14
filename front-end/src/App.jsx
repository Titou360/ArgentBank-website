import "./assets/css/main.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import SignIn from "./routes/SignIn";
import User from "./routes/User"
import PrivateRoute from "./components/PrivateRoute";

// import PrivateRoute from "./components/PrivateRoute"

export default function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/*" element={<ErrorPage />} />

          <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
