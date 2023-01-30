import React from "react";
import Container from "react-bootstrap/Container";
import { AppNavbar } from "./AppNavbar";

function App(props: any) {
  return(
    <>
      <AppNavbar />
      <Container>
        {props.children}
      </Container>
    </>
  );
}

export { App };
