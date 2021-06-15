import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {
	getAllDogs,
	getTemperaments,
	updateAllDogs,
} from '../../../Redux/actions';
import {
	getFilteredDogs,
	filterByTemp,
	filterByOwner,
} from '../../../Controllers/OrderAndFilter/OrderAndFilter';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../../Dumbs/Spinner/Spinner';
import DogsDiv from './Styled';

const Dogs = () => {
	const dispatch = useDispatch();
	const allDogs = useSelector((state) => state.allDogs);
	const temperaments = useSelector((state) => state.temperaments);
	const filterDogTemp = useSelector((state) => state.filterDogTemp);

	const [order, setOrder] = useState([]);
	useEffect(() => {
		dispatch(getAllDogs());
		dispatch(getTemperaments());
	}, [dispatch]);

	let warn = order;
	warn.concat('hola');

	let optionAr = ['A-Z', 'Z-A', 'Less Weight', 'More Weight'];

	//hago el filtrado le mando el valor del option y el array GENERAL que contiene TODOS los perros

	const handleTempChange = ({target: {value}}) => {
		let tempsf = filterByTemp(value, allDogs);
		dispatch(updateAllDogs(tempsf));
	};

	//filtro y le mando el valor del option y el array que contiene los perros con el array con perros filtrados

	const handleOrderChange = ({target: {value}}) => {
		setOrder([getFilteredDogs(value, filterDogTemp)]);
	};
	const handleOrderChange2 = ({target: {value}}) => {
		let dogOwner = filterByOwner(value, allDogs);
		dispatch(updateAllDogs(dogOwner));
	};
	const handleOnClick = () => {
		dispatch(updateAllDogs([]));
		dispatch(getAllDogs());
	};

	return (
		<DogsDiv>
			{!filterDogTemp.length ? (
				<Spinner />
			) : (
				<>
					<SearchBar />
					<div className='cnt__sel'>
						<div className='filter'>
							<h1>FILTERS</h1>
						</div>
						<div>
							<h4 className='sel__h3'> By Owner</h4>
							<select onChange={handleOrderChange2}>
								<option>API</option>
								<option>DB</option>
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
									temperaments.map(({name}) => (
										<option key={name}>{name}</option>
									))}
							</select>
						</div>
						<div>
							<button className='btn__reset' onClick={handleOnClick}>
								Reset Breeds 🔄
							</button>
						</div>
					</div>
					<Pagination />
				</>
			)}
		</DogsDiv>
	);
};

export default Dogs;
