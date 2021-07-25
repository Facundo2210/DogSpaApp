import styled from 'styled-components';

const AboutStyle = styled.div`
	img {
		text-decoration: aqua;
		filter: grayscale(100%);
		transition: 1.4s;

		&:hover {
			cursor: pointer;
			transform: rotate(360deg) scale(1.1);
			transition: transform 1.4s;
			filter: grayscale(0%);
		}
	}

	.logo_svg {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 1066px) and (max-width: 1680px) {
	}

	@media (min-width: 720px) and (max-width: 1065px) {
	}
	@media (min-width: 421px) and (max-width: 719px) {
	}
	@media (min-width: 1px) and (max-width: 420px) {
	}
`;

export default AboutStyle;
