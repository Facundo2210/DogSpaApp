import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllDogs, updateAllDogs} from '../../../Redux/actions';
import {
	getFilteredDogs,
	filterByTemp,
	filterByOwner,
} from '../../../Controllers/OrderAndFilter/OrderAndFilter';
import {FilterStyled} from './Styled';
import {BiReset} from 'react-icons/bi';
import Swal from 'sweetalert2';

const Filters = ({setOrder, setCurrentPage}) => {
	const dispatch = useDispatch();
	const allDogs = useSelector((state) => state.allDogs);
	const temperaments = useSelector((state) => state.temperaments);
	const filterDogTemp = useSelector((state) => state.filterDogTemp);

	let optionAr = ['A-Z', 'Z-A', 'Less Weight', 'More Weight'];

	//hago el filtrado le mando el valor del option y el array GENERAL que contiene TODOS los perros

	const handleTempChange = ({target: {value}}) => {
		let tempsf = filterByTemp(value, allDogs);
		dispatch(updateAllDogs(tempsf));
		setCurrentPage(1);
	};

	//filtro y le mando el valor del option y el array que contiene los perros con el array con perros filtrados

	const handleOrderChange = ({target: {value}}) => {
		setOrder([getFilteredDogs(value, filterDogTemp)]);
		setCurrentPage(1);
	};
	const handleOrderChange2 = ({target: {value}}) => {
		let dogOwner = filterByOwner(value, allDogs);
		if (dogOwner.length) dispatch(updateAllDogs(dogOwner));
		if (!dogOwner?.length) {
			Swal.fire({
				title: 'Go to create a breed ...',
				icon: 'warning',
				text: 'Breeds not created yet',
			});
		}
		setCurrentPage(1);
	};
	const handleOnClick = () => {
		dispatch(updateAllDogs([]));
		dispatch(getAllDogs());
	};

	return (
		<FilterStyled>
			<div className='filter'>
				<h1>FILTERS</h1>
			</div>
			<div className='cnt_selects'>
				<div>
					<h4 className='sel__h3'> By Owner</h4>
					<select onChange={handleOrderChange2}>
						<option>API</option>
						<option>OWN</option>
					</select>
				</div>
				<div className='cnt__order'>
					<h4 className='sel__h3'> By Order</h4>
					<select onChange={handleOrderChange}>
						{optionAr && optionAr.map((e) => <option key={e}>{e}</option>)}
					</select>
				</div>
				<div className='cnt__order'>
					<h4 className='sel__h3'>By Temperament</h4>
					<select onChange={handleTempChange}>
						{temperaments &&
							temperaments.map(({name}) => <option key={name}>{name}</option>)}
					</select>
				</div>
			</div>
			<div>
				<button className='btn__reset' onClick={handleOnClick}>
					Erase Filters <BiReset />
				</button>
			</div>
		</FilterStyled>
	);
};

export default Filters;
