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
	width: 100vw;
	background-color: #f1ecc3;

	.open_menu_hamb {
		cursor: pointer;
		position: absolute;
		right: 1rem;
		top: 27.5px;
		font-size: 30px;
		transition: 1s;
		&:active {
			transition: 1s;
		}
	}
	.div_mobile {
		display: none;
	}

	.doggy {
		margin-left: 50px;
		margin-right: 2px;
		border-radius: 999999999999px;
		width: 120px;
		height: 120px;
		background: transparent;
	}

	.home__btn {
		cursor: pointer;
		text-decoration: none;
		color: #515e63;
		height: 40px;
		border-radius: 5px;
		margin-right: 30px;
		font-weight: bold;
		background-color: rgba(255, 255, 255, 0);
		padding: 10px 20px 30px 20px;
		font-size: 20px;
		position: relative;

		&::after {
			content: '';
			border-bottom: 3px solid #515e63;
			display: block;
			position: absolute;
			bottom: 20px;
			right: 0;
			left: 0;
			transform: scaleX(0);
			transform-origin: top;
			transition: transform 0.5s ease;
			z-index: 1;
		}
		&:hover::after {
			transform: scaleX(1);
			transform-origin: bottom;
		}
	}
	@media (max-width: 800px) {
		.div_mobile {
			display: flex;
		}
		.div_web {
			display: none;
		}
	}
	@media (max-width: 400px) {
		.doggy {
			margin-left: 10px;
			width: 75px;
			height: 75px;
			margin-top: 5px;
		}
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
		color: #57837b;
		display: flex;
		align-items: center;
	}
`;
