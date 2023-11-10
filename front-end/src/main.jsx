import ReactDOM from "react-dom/client";
import App from "./App";

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";




const store = configureStore({
  reducer: rootReducer,
  devTools: true, // !IMPORTANT, put on false before building
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
