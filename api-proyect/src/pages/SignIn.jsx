import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

import { Button } from "../components/Button";
import { UserAuth } from "../context/AuthContext";


export const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {}
  };
  const onSuccess = (response) => {
    setUser(response.profileObj);
  };
  const onFailure = (response) => {
    console.log("Something went wrong");
  };

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
          <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Continue with Google"
            cookiePolicy={"single_host_origin"}
          />
        </section>
      </section>
    </section>
  );
};
