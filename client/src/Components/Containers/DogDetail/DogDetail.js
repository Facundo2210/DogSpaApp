import React, { useEffect } from "react";
import {
  getDogDetail,
  getAllDogs,
  cleanDogDetail,
} from "../../../Redux/actions";
import { connect } from "react-redux";
import Spinner from "../../Dumbs/Spinner/Spinner";
import noneImage from "../../../Assets/DefectDog.jpeg";
import DogDetailDiv from "./Styled";

const DogDetail = ({ match, dogDetail, getDogDetail, cleanDogDetail }) => {
  let idDog = match.params.id;
  useEffect(() => {
    getDogDetail(idDog);
    return () => cleanDogDetail();
  }, [getDogDetail, cleanDogDetail, idDog]);
  const {
    name,
    image,
    weight,
    temperaments,
    life_span,
    height,
    temperament,
  } = dogDetail;
  let tempps;
  if (temperaments) {
    tempps =
      temperaments &&
      temperaments.map(({ name }) => {
        return name;
      });
  }
  if (dogDetail.hasOwnProperty("name")) {
    return (
      <DogDetailDiv>
        <div className="div__cnt">
          <div className="h1__name">
            <h1>{name}</h1>
          </div>
          <img src={image ? image.url : noneImage} alt="IMAGEN" />
          <div>
            <h3>⚖️ Weight: {weight.metric ? weight.metric : weight} KGS</h3>
            <h3>
              🐕 Temperaments:{" "}
              {tempps
                ? tempps.join(", ")
                : temperament
                ? temperament
                : "I Have no temperaments"}
            </h3>
            <h3>📅 Life Span: {life_span} </h3>
            <h3>📏 Height: {height.metric ? height.metric : height} Ctms</h3>
          </div>
        </div>
      </DogDetailDiv>
    );
  } else {
    return <Spinner />;
  }
};

const mapState = (state) => {
  return {
    dogDetail: state.dogDetail,
    allDogs: state.allDogs,
  };
};

export default connect(mapState, { getDogDetail, getAllDogs, cleanDogDetail })(
  DogDetail
);
