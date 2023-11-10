import Logo from "../../assets/img/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, getUserProfile } from "../../actions/user.action";
import { useEffect } from "react";

export default function Navbar() {
  const userProfile = useSelector((state) => state.userReducer.userProfile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (token) {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <nav>
            <NavLink to="/User" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userProfile ? userProfile.firstName : "Loading..."}
            </NavLink>
            <NavLink to="/" onClick={handleLogout} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </nav>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/SignIn" className="main-nav-item">
            <i className="fa fa-sign-in"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
}
