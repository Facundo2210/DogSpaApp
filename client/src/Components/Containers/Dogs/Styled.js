import styled from 'styled-components';

const DogsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;

	@media (min-width: 1066px) and (max-width: 1680px) {
	}

	@media (min-width: 720px) and (max-width: 1065px) {
	}
	@media (min-width: 420px) and (max-width: 719px) {
	}
	@media (min-width: 1px) and (max-width: 420px) {
	}
`;

export const DivBtnPaged = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
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
