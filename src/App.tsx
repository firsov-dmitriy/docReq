import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocsTable from "./components/DocsTable/DocsTable";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<AppLayout />}>
          <Route
            index
            element={<h1>Hello</h1>}
          />
          <Route
            path='/form'
            element={<h1>form</h1>}
          />
          <Route
            path='docs'
            element={<DocsTable />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
