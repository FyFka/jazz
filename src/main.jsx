import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import LoginPage from "./pages/login/page";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProfilePage from "./pages/profile/page";
import AnyDataTable from "./pages/any-data/page";
import InfoPage from "./pages/info/page";
import HomePage from "./pages/home/home";
import "./globals.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/any-data" element={<AnyDataTable />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
