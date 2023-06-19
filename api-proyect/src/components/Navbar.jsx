import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import Button from "../components/Button";

export const Navbar = ({ children }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="Navbar">
      <h2 className="Navbar-h2">
        <Link className="Navbar-link" to="/">
          Movies Lib
        </Link>
      </h2>
      <form className="Navbar-form" onSubmit={handleSubmit}>
        <input
          className="Navbar-input"
          type="text"
          placeholder="¿Qué quieres ver?"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
        <button className="Navbar-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="Navbar-svg"
          >
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
        </button>
      </form>
      {user?.displayName ? (
        <Button className="Button" onClick={handleSignOut} title={Logout} />
      ) : (
        <Link className="Navbar-sigin" to="/signIn">Sign In</Link>
      )}
    </nav>
  );
};
