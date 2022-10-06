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
          {docs && (
            <Route
              index
              element={<DocsTable docs={docs} />}
            />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
