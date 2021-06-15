import React from "react";
import { Link } from "react-router-dom";
import Image from "./Styled";

const LandingPage = () => {
  return (
    <Image>
      <h1>Welcome to my individual project</h1>
      <Link to="/dogs">Lets get started!</Link>
    </Image>
  );
};

export default LandingPage;
