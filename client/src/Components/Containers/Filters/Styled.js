import styled from 'styled-components';

export const FilterStyled = styled.div`
	border: 5px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	margin: 20px;
	padding: 15px 50px 5px;
	width: 80vw;
	border-radius: 25px;
	background-color: rgba(0, 0, 0, 0.6);

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
	.cnt_selects {
		display: flex;
	}
	.filter {
		color: rgba(255, 255, 255, 0.9);
		margin-right: 30px;
	}
	.sel__h3 {
		color: white;
		display: flex;
		justify-content: center;
		height: 23px;
		width: 140px;
	}
	.cnt__order {
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: center;
	}
	.btn__reset {
		cursor: pointer;
		background: cornsilk;
		color: #515e63;
		border: 4px solid #515e63;
		border-radius: 15px;
		padding: 10px;
		margin-left: 20px;
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
	@media (min-width: 1066px) and (max-width: 1680px) {
		max-width: 940px;
	}
	@media (min-width: 720px) and (max-width: 1065px) {
		display: flex;
		flex-direction: column;
		max-width: 580px;
	}
	@media (min-width: 591px) and (max-width: 719px) {
		display: flex;
		flex-direction: column;

		.cnt_selects {
			display: flex;
		}
	}
	@media (min-width: 1px) and (max-width: 590px) {
		width: 290px;
		flex-direction: column;
		.btn__reset {
			margin: 0;
		}
		.cnt_selects {
			display: flex;
			flex-direction: column;
		}
	}
`;
