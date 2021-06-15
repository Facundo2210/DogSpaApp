import styled from "styled-components";

const DogsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  .filter {
    color: rgba(255, 255, 255, 0.9);
    margin-right: 30px;
  }
  .btn__reset {
    cursor: pointer;
    background: #2a9d8f;
    color: #caf0f8;
    border: 4px solid #caf0f8;
    border-radius: 15px;
    padding: 10px;
    margin-left: 20px;
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
  .cnt__dogs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cnt__sel {
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin: 20px;
    padding: 15px 50px 5px;
    width: fit-content;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .cnt__order {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
  .sel__h3 {
    color: white;
    display: flex;
    justify-content: center;
    height: 23px;
    width: 140px;
  }
  .page__h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    margin: 10px;
    padding: 10px;
    background-color: black;
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: bold;
  }
  select {
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    margin-top: 5px;
    margin-bottom: 20px;
    margin-right: 5px;
    height: 40px;
    width: 130px;
    cursor: pointer;

    &:focus-within {
      border-radius: 10px 10px 0 0;
      color: black;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  option {
    cursor: pointer;
  }
`;

export const DivBtnPaged = styled.div`
  padding: 20px;
  button {
    color: white;

    font-size: 15px;
    background-color: #264653;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    &:hover {
      background-color: white;
      color: #264653;
      transform: scale(1.3);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export default DogsDiv;
