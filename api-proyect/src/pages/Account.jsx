import { useState } from "react";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Home } from "./Home";

export const Account = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <Home></Home>
    </>
  );
};
