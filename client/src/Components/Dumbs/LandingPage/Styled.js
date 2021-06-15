import styled from "styled-components";
import image from "../../../Assets/Perritos.jpg";

const Image = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(${image}) fixed center no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 30px;
    border-radius: 50px;
    height: 70px;
    width: 70vw;
    margin-top: 20px;
    box-shadow: 10px 10px 10px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    background: linear-gradient(
      93deg,
      rgba(161, 232, 194, 1) 0%,
      rgba(107, 198, 239, 1) 100%
    );
    &:hover {
      font-weight: bold;
      margin-top: 10px;
      transform: scale(1.2);
      transition: 0.5s;
    }
    &:active {
      transform: scale(0.6);
      transition: 0.5s;
    }
  }
  h1 {
    width: 470px;
    height: fit-content;
    margin-top: 40px;
  }
`;

export default Image;
