import styled from 'styled-components';

export const StyledDIV = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	align-content: center;
	flex-wrap: nowrap;
	margin: 35px 0;
	height: 80px;
	background-color: grey;
	.doggy {
		margin-left: 50px;
		margin-right: 2px;
		border-radius: 999999999999px;
		width: 120px;
		height: 120px;
		background: transparent;
	}
`;

export const IMG_H1_DIV = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;

	h1 {
		margin: 0 10px;
		padding-left: 10px;
		border-left: 2px solid rgba(155, 255, 255, 0.1);
		color: #1d3557;
		display: flex;
		align-items: center;
	}
`;
export const BUTTONS_DIV = styled.div`
	display: flex;

	.home__btn {
		border: 4px solid black;
		cursor: pointer;
		text-decoration: none;
		color: black;
		height: 40px;
		border-radius: 5px;
		margin-right: 30px;
		font-weight: bold;
		font-size: 20px;
		background-color: rgba(255, 255, 255, 0);
		padding: 10px 20px 30px 20px;

		&:hover {
			box-shadow: 10px 10px 10px;
			transform: scale(1.1);
		}
		&:active {
			transform: scale(1.1);
		}
	}
`;
