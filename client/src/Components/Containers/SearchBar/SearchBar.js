import React, { useState } from "react";
import StyledForm from "./Styled";
import { connect } from "react-redux";
import { getDogsByQuery, updateAllDogs } from "../../../Redux/actions/index";

const SearchBar = ({ getDogsByQuery, updateAllDogs }) => {
  const [breed, setBreed] = useState("");

  const handleOnChange = ({ target }) => {
    const { value } = target;
    setBreed(value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    updateAllDogs([]);
    getDogsByQuery(breed);
    setBreed("");
  };

  return (
    <StyledForm onSubmit={handelSubmit}>
      <label>Search Breed: </label>
      <input
        className="form__input"
        type="text"
        value={breed}
        placeholder="Search one breed"
        onChange={handleOnChange}
      />
      <input className="form__button" type="submit" value="Search" />
    </StyledForm>
  );
};

export default connect(null, { getDogsByQuery, updateAllDogs })(SearchBar);
