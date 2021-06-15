import React from "react";
import { Link } from "react-router-dom";
import { StyledDIV, IMG_H1_DIV, BUTTONS_DIV } from "./Styled";
import image from "../../../Assets/LogoFeeth.png";
import react from "../../../Assets/react.svg";
import redux from "../../../Assets/redux.svg";
import express from "../../../Assets/express.svg";
import postgresql from "../../../Assets/postgresql.svg";
import sequelize from "../../../Assets/sequelize.svg";

export function Nav() {
  return (
    <StyledDIV>
      <IMG_H1_DIV>
        <Link to="/dogs">
          <img className="doggy" src={image} alt="dog" />
        </Link>
        <h1>Breeds</h1>.
        <img
          style={{ width: "100px", height: "100px" }}
          src={react}
          alt="react"
        />
        <img
          style={{ width: "130px", height: "100px" }}
          src={redux}
          alt="react"
        />
        <img
          style={{ width: "130px", height: "100px" }}
          src={express}
          alt="react"
        />
        <img
          style={{ width: "130px", height: "100px" }}
          src={postgresql}
          alt="react"
        />
        <img
          style={{ width: "130px", height: "100px" }}
          src={sequelize}
          alt="react"
        />
      </IMG_H1_DIV>
      <BUTTONS_DIV>
        <Link className="home__btn" to="/dogs">
          Home
        </Link>
        <Link className="home__btn" to="/add">
          Create Breed
        </Link>
      </BUTTONS_DIV>
    </StyledDIV>
  );
}

export default Nav;
