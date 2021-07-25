import styled from 'styled-components';

export const Hamb = styled.div`
	.hamb-container {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 20px;
		right: 40px;
		cursor: pointer;
		z-index: 1337;
		color: white;
	}

	.hamb {
		position: relative;
		width: 40px;
		height: 2px;
		background: black;
		top: 50%;
		transition: all 0.2s ease-in-out;
		transform: translateY(-50%);
		z-index: 1;
	}

	.hamb:before,
	.hamb:after {
		position: absolute;
		content: '';
		width: 40px;
		height: 2px;
		transition: all 0.3s ease-in-out;
		background: black;

		z-index: 1;
	}

	.hamb:before {
		top: -10px;
	}

	.hamb:after {
		top: 10px;
	}

	.hamb-container:hover .hamb {
		width: 30px;
	}

	.hamb-container:hover .hamb:after {
		width: 20px;
	}

	.hamb-container.open .hamb {
		background: transparent;
	}

	.hamb-container.open .hamb:before {
		transform: rotate(-45deg);
		top: 0;
		width: 30px;

		background: white;
	}

	.hamb-container.open .hamb:after {
		transform: rotate(45deg);
		top: 0;
		width: 30px;
		background: white;
	}

	.menu {
		position: absolute;
		top: 0px;
		right: 0;
		width: 400px;
		height: 400px;
		background: #222;
		transition: all 0.3s ease-in;
		transform: translateX(100%);
		z-index: 1;
		display: flex;
		flex-direction: column;
		a {
			color: cornsilk;
			&::after {
				border-bottom: 3px solid cornsilk;
			}
		}
	}

	.slide {
		padding-top: 60px;
		transform: translateX(0);
		display: flex;
		flex-direction: column;
		color: cornsilk;
	}
	.slide > a {
		width: fit-content;
		height: 80px;
	}

	@media (min-width: 1066px) and (max-width: 1680px) {
	}

	@media (min-width: 720px) and (max-width: 1065px) {
	}
	@media (min-width: 420px) and (max-width: 719px) {
	}
	@media (min-width: 1px) and (max-width: 420px) {
		max-width: 420px;
		.menu {
			width: 100%;
		}
	}
`;
