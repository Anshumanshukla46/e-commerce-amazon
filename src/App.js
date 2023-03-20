import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from './Components/Checkout';

function App() {
  return (
    // all children inside this will follow router
    <BrowserRouter>

      {/* client side rendering */}
      <Routes>
        {/* checkout */}

        {/* taking multiple element in Route */}

        <Route path="/checkout" element={<>
          <Header />
          <Checkout />
        </>}>
        </Route>


        {/* login */}
        <Route path="/login" element={<h1>Login</h1>}>

        </Route>


        {/* default router due to "/" HomePage */}
        <Route path="/" element={<>
          <Header />
          <Home />
        </>}>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
