import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
