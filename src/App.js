import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" element={<h1>Checkout</h1>}>

        </Route>

        <Route path="/login" element={<h1>Login</h1>}>

        </Route>


        {/* HomePage */}
        <Route path="/" element={<h1>HomePage</h1>}>

        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
