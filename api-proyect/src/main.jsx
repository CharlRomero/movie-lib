import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Movie } from "./pages/Movie.jsx";
import { Search } from "./pages/Search.jsx";
import { Account } from "./pages/Account.jsx";
import { SignIn } from "./pages/SignIn.jsx";

import "./sass/style.scss";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
