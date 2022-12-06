import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import LoginPage from "./pages/login/page";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProfilePage from "./pages/profile/page";
import Calendar from "./pages/calendar/page";
import TicTacToe from "./pages/ticTacToe/page";
import "./globals.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
