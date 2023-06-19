import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { UserAuth } from "../context/AuthContext";

export const SignIn = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {}
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, []);

  return (
    <section className="SignIn">
      <section className="SignIn-header">
        <h2 className="SignIn-header--h2">Inicia sesión o registrate</h2>
        <h3 className="SignIn-header--h3">Te damos la bienvenida</h3>
        <Link className="SignIn-header--h1" to="/">
          Movie Lib
        </Link>
      </section>
      <section className="SignIn-section">
        <form action="" className="SignIn-form">
          <section className="SignIn-form--input">
            <input
              type="email"
              className="SignIn-input"
              placeholder="Correo electrónico"
            />
            <input
              type="password"
              className="SignIn-input"
              placeholder="Contraseña"
            />
          </section>
          <Button className="Button" title="Continúa"></Button>
        </form>
        <h2>o</h2>
        <section className="SignIn-socialLog">
          <Button
            className="Button"
            title="Google"
            onClick={handleGoogleSignIn}
          >
            <svg
              className="Button-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </Button>
        </section>
      </section>
    </section>
  );
};
