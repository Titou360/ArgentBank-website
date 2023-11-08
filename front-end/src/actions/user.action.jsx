export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";


export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

export const userLoginFailed = () => ({
  type: USER_LOGIN_FAILED,
});

export const userLogin = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const userData = { email, password };

      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("Connexion réussie !");
        const token = data.body.token;
        sessionStorage.setItem("token", token);
        console.log("le token", token);
        dispatch(userLoginSuccess());
        navigate("/user");
      } else if (response.status === 400) {
        console.log("erreur 400");
        sessionStorage.removeItem("token");
        dispatch(userLoginFailed());
      } else if (response.status === 401) {
        console.log("erreur 401");
        sessionStorage.removeItem("token");
        dispatch(userLoginFailed());
      }
    } catch (error) {
      console.error(
        "😒 An error has occurred while recovering the user :",
        error
      );
      throw error;
    }
  };
};
