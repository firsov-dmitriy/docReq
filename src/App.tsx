import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGetConstructorsQuery } from "./app/service/constructorApi";
import { useGetDocReqQuery } from "./app/service/docApi";
import DocsForm from "./components/DocsForm/DocsForm";
import DocsTable from "./components/DocsTable/DocsTable";
import AppLayout from "./Layout/AppLayout";

function App() {
  const { data: docs } = useGetDocReqQuery({});
  const { data: users } = useGetConstructorsQuery({});
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
          {users && docs && (
            <Route
              path='/form'
              element={
                <DocsForm
                  users={users}
                  docs={docs}
                />
              }
            />
          )}
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
