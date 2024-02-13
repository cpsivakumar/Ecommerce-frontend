import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage,SignUpPage } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
