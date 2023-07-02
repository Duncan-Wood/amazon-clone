import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import Orders from "./components/Orders";

// If you want to use cloud function without blaze plan then Use  'firebase serve --only functions' instead of 'firebase emulators:start' command
const promise = loadStripe(
  "pk_test_51NPCktAuPZYdbXedtjKolFncu0s6m8NlrPGEx4yuqz36qY82SlGwdZeZFgfvW7Blg48ucOWTzRo7Y3DbflsbeKrC009Wps7I5S"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // This will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER", // dispatch an action
          user: authUser, // set the user to the authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null, // set the user to null
        });
      }
    });
  }, []);

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app">
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        {/* <Route path="/orders" element="Orders" /> */}
      </Routes>
    </div>
  );
}

export default App;
