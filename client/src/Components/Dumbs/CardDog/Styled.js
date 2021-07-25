import styled from 'styled-components';

export const CntCardDog = styled.div`
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f1ecc390;
	color: #1d3557;
	border-radius: 15px;
	width: 280px;
	height: 350px;
	margin: 8px;
	padding: 0;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.3);

	&:hover {
		box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.6);
		bottom: 10px;
		right: 10px;
	}

	.div__temps {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 8px 0;
	}

	p {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		font-size: 16px;
		padding: 0 8px;
		font-weight: bold;
	}
	img {
		border-radius: 15px;
		width: 120px;
		height: 120px;
	}
	.card__title {
		margin: 5px 0;
	}
`;

export const CntCardDog2 = styled.div`
	text-align: center;
	align-self: center;
	box-sizing: border-box;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	align-items: center;
	background-color: rgba(255, 255, 255, 0.6);
	color: #b22222;
	border-radius: 15px;
	width: 90vw;
	height: fit-content;
	padding: 2rem;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	.card__title {
		padding: 20px;
	}
`;

/* const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 300px;
  color: white;
  position: relative;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  margin: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.6);
    bottom: 20px;
    right: 20px;
  }

  .card__title {
    font-size: 25px;
    position: relative;

    &::after {
      content: "";
      height: 50px;
      background-color: red;
      display: block;
      position: absolute;
      bottom: -10px;
      right: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s ease;
      z-index: -1;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  .card__info {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card__max {
    margin: 0 20px;
  }
`; */

export const Btn = styled.button`
	cursor: pointer;
	background: rgb(161, 232, 194);
	background: linear-gradient(
		93deg,
		rgba(161, 232, 194, 1) 0%,
		rgba(107, 198, 239, 1) 100%
	);
	padding: 10px 20px;
	border: 0;
	margin: 0 10px;
	margin-top: 5px;
	font-size: 13px;
	border-radius: 10px;

	&.danger {
		background: rgb(242, 104, 142);
		background: linear-gradient(
			93deg,
			rgba(242, 104, 142, 1) 0%,
			rgba(239, 120, 107, 1) 100%
		);
	}

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9);
	}
`;
