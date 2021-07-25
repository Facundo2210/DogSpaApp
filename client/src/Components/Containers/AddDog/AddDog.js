import React, {useEffect, useState} from 'react';
import FormAddDog from './Styled';
import {useDispatch, useSelector} from 'react-redux';
import {getTemperaments, addNewDog} from '../../../Redux/actions/index';
import {validate} from './validate';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router';

const notif = (icon, title, text) => {
	return Swal.fire({
		title,
		icon,
		text,
	});
};

const AddDog = () => {
	const temperaments = useSelector((state) => state.temperaments);
	const allDogs = useSelector((state) => state.allDogs);
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch(getTemperaments());
	}, [dispatch]);

	const [tempSelect, setTempSelect] = useState([]);
	const [errors, setErrors] = useState({});
	const [input, setInput] = useState({
		name: '',
		life_span: '',
		weight: '',
		height: '',
		temperament: [],
	});
	let arr = ['name', 'life_span', 'weight', 'height'];

	const handleOnChange = ({target}) => {
		const {value, name} = target;
		setErrors(
			validate({
				...input,
				[name]: value,
			})
		);
		setInput({
			...input,
			[name]: value,
		});
	};

	const handleOnClick = ({target: {value, name}}) => {
		value = parseInt(value);
		if (input.temperament.length > 4)
			return notif(
				'warning',
				'Max Temperaments',
				'Maximum temperaments (5) reached'
			);
		if (input.temperament.includes(value))
			return notif('warning', 'Repeat', "You Can't repeat temperaments");
		setErrors(
			validate({
				...input,
				[name]: [...input.temperament, value],
			})
		);
		setInput({
			...input,
			[name]: [...input.temperament, value],
		});

		let tempSelected = temperaments.find(({id}) => parseInt(id) === value);
		setTempSelect([...tempSelect.concat(tempSelected.name)]);
	};
	const handleOnClickI = () => {
		notif('warning', 'Not yet', 'You have to fill in all the spaces correctly');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (alreadyExist) {
			return notif('warning', 'Already exist', 'Name already exist');
		}
		dispatch(addNewDog(input));
		setInput({
			name: '',
			life_span: '',
			weight: '',
			height: '',
			temperament: [],
		});
		setTempSelect([]);
		Swal.fire({
			title: 'Breed Created',
			text: 'Do you want to back home?',
			icon: 'success',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Back home!',
		}).then((result) => {
			if (result.isConfirmed) {
				history.push('/dogs');
			}
		});
	};

	let alreadyExist = allDogs?.find(
		({name: n}) => n.toUpperCase() === input.name.toUpperCase()
	);

	return (
		<FormAddDog onSubmit={handleSubmit}>
			<div>
				<h1 className='h1__crt'>CREATE YOUR OWN BREED</h1>
			</div>
			{arr &&
				arr.map((e) => (
					<div className='cnt__inp' key={e}>
						<label className='lbs'>{e.toUpperCase().replace('_', ' ')}</label>
						<input
							required
							className='inps'
							name={e}
							value={input[e]}
							type='text'
							autoComplete='off'
							onChange={handleOnChange}
						/>
						<h3 className='p__err'>{errors[e] && errors[e]}</h3>
					</div>
				))}
			<select
				className='slt__btn'
				name='temperament'
				multiple
				onChange={handleOnClick}
			>
				{temperaments?.map(({name, id}) => (
					<option value={id} key={name}>
						{name}
					</option>
				))}
			</select>
			<div className='div__temp'>
				{tempSelect?.map((e) => (
					<h2 className='h2__temp' key={e}>
						{e}
					</h2>
				))}
			</div>

			<h3 className='p__err'>{errors.temperament}</h3>

			<div>
				{input.name !== '' && !errors.hasOwnProperty('temperament') ? (
					<input className='correct__btn' type='submit' value='Create Breed' />
				) : (
					<input
						className='error__btn'
						type='button'
						value='Create Breed'
						onClick={handleOnClickI}
					/>
				)}
			</div>
		</FormAddDog>
	);
};

export default AddDog;
