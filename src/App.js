import "./App.css";
import React from "react";
import Router from "./utils/Routing";
import Wrapper from "./utils/AuthWrapper";

const App = () => {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
};

export default App;
