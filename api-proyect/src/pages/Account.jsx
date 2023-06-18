import { useState } from "react";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";

export const Account = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <Navbar>
        <Button title="Logout" onClick={toggle}></Button>
      </Navbar>
    </>
  );
};
