import styled, {css} from 'styled-components';

const Div2 = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;

	${({isBottom}) =>
		isBottom &&
		css`
			margin: auto;
		`}
`;

export default Div2;
