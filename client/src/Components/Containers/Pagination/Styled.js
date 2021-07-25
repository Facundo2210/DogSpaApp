import styled from 'styled-components';

const DogsDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	${({cant}) =>
		cant !== 1
			? '.cnt__dogs { height: fit-content; display: grid; grid-template-columns: repeat(4, 400px);}'
			: '.cnt__dogs { height: fit-content; display: flex;	align-items: center; justify-content: center; flex-direction: column;	} '}

	.page__h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 50px;
		margin: 10px;
		padding: 10px;
		background-color: black;
		border-radius: 20px;
		color: white;
		font-size: 24px;
		font-weight: bold;
	}

	@media (min-width: 1066px) and (max-width: 1680px) {
		.cnt__dogs {
			grid-template-columns: repeat(3, 350px);
		}
	}

	@media (min-width: 720px) and (max-width: 1065px) {
		.cnt__dogs {
			grid-template-columns: 50% 50%;
		}
	}
	@media (min-width: 591px) and (max-width: 719px) {
		.cnt__dogs {
			grid-template-columns: repeat(2, 290px);
		}
	}
	@media (min-width: 1px) and (max-width: 590px) {
		.cnt__dogs {
			grid-template-columns: 290px;
		}
	}
`;

export default DogsDiv;
