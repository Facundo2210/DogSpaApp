import React, { useEffect, useState } from "react";
import FormAddDog from "./Styled";
import { connect } from "react-redux";
import { getTemperaments, addNewDog } from "../../../Redux/actions/index";
import { validate } from "./validate";

const AddDog = ({ allDogs, addNewDog, temperaments, getTemperaments }) => {
  useEffect(() => {
    getTemperaments();
  }, [getTemperaments]);
  const [tempSelect, setTempSelect] = useState([]);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    life_span: "",
    weight: "",
    height: "",
    temperament: [],
  });
  let arr = ["name", "life_span", "weight", "height"];

  const handleOnChange = ({ target }) => {
    const { value, name } = target;

    setErrors(
      validate({
        ...input,
        [name]: value,
      })
    );
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleOnClick = ({ target: { value, name } }) => {
    value = parseInt(value);
    if (input.temperament.length > 4)
      return alert("Maximum temperaments (5) reached");
    if (input.temperament.includes(value))
      return alert("You Can't repeat temperaments");
    setErrors(
      validate({
        ...input,
        [name]: [...input.temperament, value],
      })
    );
    setInput({
      ...input,
      [name]: [...input.temperament, value],
    });

    let tempSelected = temperaments.find(({ id }) => parseInt(id) === value);
    setTempSelect([...tempSelect.concat(tempSelected.name)]);
  };
  const handleOnClickI = (e) => {
    alert("You have to fill in all the spaces correctly");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (alreadyExist) {
      return alert("Name already exist");
    }
    addNewDog(input);
    alert("Breed Creacted");
  };

  let alreadyExist =
    allDogs &&
    allDogs.find(({ name: n }) => n.toUpperCase() === input.name.toUpperCase());

  return (
    <FormAddDog onSubmit={handleSubmit}>
      <div>
        <h1 className="h1__crt">CREATE YOUR OWN BREED</h1>
      </div>
      {arr &&
        arr.map((e) => (
          <div className="cnt__inp" key={e}>
            <label className="lbs">{e.toUpperCase().replace("_", " ")}</label>
            <input
              className="inps"
              name={e}
              type="text"
              autoComplete="off"
              onChange={handleOnChange}
            />
            <h3 className="p__err">{errors[e] && errors[e]}</h3>
          </div>
        ))}
      <select
        className="slt__btn"
        name="temperament"
        multiple
        onChange={handleOnClick}
      >
        {temperaments &&
          temperaments.map(({ name, id }) => (
            <option value={id} key={name}>
              {name}
            </option>
          ))}
      </select>
      <div className="div__temp">
        {tempSelect &&
          tempSelect.map((e) => (
            <h2 className="h2__temp" key={e}>
              {e}
            </h2>
          ))}
      </div>
      <h3 className="p__err">{errors.temperament}</h3>
      {input.name !== "" && !errors.hasOwnProperty("temperament") ? (
        <input className="correct__btn" type="submit" value="Create Breed" />
      ) : (
        <input
          className="error__btn"
          type="button"
          value="Create Breed"
          onClick={handleOnClickI}
        />
      )}
    </FormAddDog>
  );
};

export default connect(
  ({ temperaments, allDogs }) => {
    return {
      temperaments,
      allDogs,
    };
  },
  { getTemperaments, addNewDog }
)(AddDog);
