import React from "react";
import gif from "../../../Assets/gifDog.gif";
import SearchBar from "../../Containers/SearchBar/SearchBar";
import Div2 from "./Styled";

const Spinner = () => {
  return (
    <Div2>
      <div>
        <SearchBar />
      </div>
      <img src={gif} alt="Cargando..." />
    </Div2>
  );
};

export default Spinner;
