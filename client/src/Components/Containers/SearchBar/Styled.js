import styled from "styled-components";

const StyledForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  width: fit-content;
  padding: 5px;

  &:focus-within {
    border-color: #46e9ae;
    transform: scale(1.5);
    transition: 0.5s;
    label {
      color: #46e9ae;
    }
    input {
      color: #46e9ae;
      font-weight: bold;
      font-size: 18px;
    }
  }
  label {
    margin-left: 8px;
    color: white;
    margin-right: 3px;
    font-size: 18px;
  }

  input {
    color: white;
    outline: 0;
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .form__input {
    border-radius: 10px 0 0 10px;
    padding: 10px 20px;
  }
  .form__button {
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    padding: 10px 20px;
  }
`;

export default StyledForm;
