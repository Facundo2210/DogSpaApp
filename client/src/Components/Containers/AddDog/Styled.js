import styled from 'styled-components';

const FormAddDog = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70vw;
	height: fit-content;
	border: 2px solid cornsilk;
	background-color: #f1ecc380;
	margin-bottom: 80px;
	text-align: center;
	position: relative;

	select {
		cursor: pointer;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0.5);
		font-size: 18px;
		margin: 15px;
		height: 100px;
	}
	.correct__btn {
		height: fit-content;
		margin-bottom: 20px;
		cursor: pointer;
		font-size: 20px;
		background: cornsilk;
		color: #515e63;
		border: 4px solid #515e63;
		border-radius: 15px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			color: cornsilk;
			border: 4px solid cornsilk;
			background-color: #515e63;
			font-weight: bold;
			transition: 0.5s;
		}

		&:active {
			transform: scale(0.9);
		}
	}

	.error__btn {
		margin-bottom: 20px;
		cursor: pointer;
		background: cornsilk;
		color: #515e63;
		border: 4px solid #515e63;
		border-radius: 15px;
		padding: 10px;
		height: fit-content;
		font-size: 20px;

		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			color: cornsilk;
			border: 4px solid cornsilk;
			background-color: #515e63;
			font-weight: bold;
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
		color: #f1ecc3;
		background-color: #515e63;
		border: 2px solid #f1ecc3;
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

	.slt__btn {
		text-align: center;
		display: flex;
		height: 200px;
		width: 500px;
	}
	@media (min-width: 1066px) and (max-width: 1680px) {
	}

	@media (min-width: 720px) and (max-width: 1065px) {
	}
	@media (min-width: 420px) and (max-width: 719px) {
	}
	@media (min-width: 1px) and (max-width: 420px) {
	}
`;

export default FormAddDog;
