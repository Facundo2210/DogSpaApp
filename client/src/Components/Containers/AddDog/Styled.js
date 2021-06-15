import styled from "styled-components";

const FormAddDog = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  height: fit-content;
  border: 3px solid white;
  margin: 50px 0 0 160px;
  background: rgb(233, 196, 106);
  select {
    cursor: pointer;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    margin: 15px;
    height: 100px;
  }
  .correct__btn {
    background: #2a9d8f;
    border-radius: 15px;
    border: 4px solid #caf0f8;
    padding: 13px 20px 35px 20px;
    margin-bottom: 20px;
    cursor: pointer;
    color: #caf0f8;
    font-size: 20px;
    &:hover {
      color: #2a9d8f;
      border: 4px solid #2a9d8f;
      background-color: #caf0f8;
      transform: scale(1.1);
      font-weight: bold;
      box-shadow: 10px 10px 10px black;
      transition: 0.5s;
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .error__btn {
    background: #2a9d8f;
    border-radius: 15px;
    border: 4px solid #caf0f8;
    padding: 13px 20px 35px 20px;
    margin-bottom: 20px;
    cursor: pointer;
    color: #caf0f8;
    font-size: 20px;
    &:hover {
      color: #2a9d8f;
      border: 4px solid #2a9d8f;
      background-color: #caf0f8;
      transform: scale(1.1);
      font-weight: bold;
      box-shadow: 10px 10px 10px black;
      transition: 0.5s;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .h1__crt {
    color: cornsilk;
    padding: 20px;
  }
  .p__err {
    padding: 10px 10px 10px 0px;
    color: red;
  }
  .div__temp {
    display: flex;
  }
  .h2__temp {
    background-color: aqua;
    margin: 5px;
    border-radius: 20px;
    padding: 10px 20px;
  }
  label {
    font-size: 25px;
    font-weight: bold;
    padding: 0;
    margin: 5px;
  }

  input {
    height: 30px;
  }
`;

export default FormAddDog;
