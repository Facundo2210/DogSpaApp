import styled from 'styled-components';

const StyledForm = styled.form`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	border: 2px solid rgba(255, 255, 255, 0.4);
	width: fit-content;
	padding: 5px;
	.label_mobile {
		display: none;
	}

	&:focus-within {
		border-color: #46e9ae;
		transition: 0.5s;
		label {
			color: #46e9ae;
		}
		input {
			color: #46e9ae;
		}
		input.form__button {
			font-weight: bold;
		}
	}
	label {
		margin-left: 8px;
		color: white;
		margin-right: 3px;
		font-size: 18px;
	}

	input {
		color: white;
		outline: 0;
		border: 0;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.form__input {
		border-radius: 10px 0 0 10px;
		padding: 10px 20px;
	}
	.form__button {
		cursor: pointer;
		border-radius: 0 10px 10px 0;
		padding: 10px 20px;
	}
	@media (min-width: 1066px) and (max-width: 1680px) {
	}

	@media (min-width: 720px) and (max-width: 1065px) {
	}
	@media (min-width: 421px) and (max-width: 719px) {
	}

	@media (min-width: 1px) and (max-width: 420px) {
		width: 80vw;
		.form__input {
			width: 50%;
		}
		.label_web {
			display: none;
		}
		.label_mobile {
			display: flex;
			width: 40%;
		}
		input.form__button {
			width: 30%;
			padding: 10px;
		}
	}
`;

export default StyledForm;
