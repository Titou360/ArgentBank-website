import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../actions/user.action";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connectionFailed, setConnectionFailed] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
    setConnectionFailed(false); //promesse
  };

      // if (data) {
      //   console.log("Connexion réussie !");
      //   const token = data.body.token;
      //   console.log("le token", token);
      //   sessionStorage.setItem("token", token);
      //   setConnectionFailed(false);
      //   navigate("/user");
      // }


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div style={{ display: connectionFailed ? "block" : "none" }}>
              <p className="errorMessage">
                Connection failed :<br /> Invalid Email or Password <br />{" "}
                Please retry
              </p>
            </div>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}