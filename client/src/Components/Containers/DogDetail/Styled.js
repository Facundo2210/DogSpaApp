import styled from 'styled-components';

const DogDetailDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 50px;

	.div__cnt {
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 15px;
		padding: 0 50px 50px;
		margin: 50px;
		background-color: rgba(255, 255, 255, 0.6);
		width: 70vw;
		color: #1d3557;
		font-size: 18px;
		.h1__name {
			margin: 20px;
			h1 {
				border-radius: 30px;
				background: linear-gradient(
					93deg,
					rgba(161, 232, 194, 1) 0%,
					rgba(107, 198, 239, 1) 100%
				);
				padding: 15px;
				margin: 30px;
				&:hover {
					background: linear-gradient(
						93deg,
						rgba(161, 232, 194, 1) 100%,
						rgba(107, 198, 239, 1) 0%
					);
				}
			}
		}
		h3 {
			margin: 25px;
		}
	}
	img {
		width: 70%;
		height: 70%;
		border-radius: 25px;
		margin-bottom: 30px;
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
export default DogDetailDiv;
