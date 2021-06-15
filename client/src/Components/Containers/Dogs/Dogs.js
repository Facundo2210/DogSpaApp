import {connect} from 'react-redux';
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
import CardDog from '../../Dumbs/CardDog/CardDog';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../../Dumbs/Spinner/Spinner';
import DogsDiv, {DivBtnPaged} from './Styled';

const Dogs = ({
	getAllDogs,
	allDogs,
	getTemperaments,
	temperaments,
	updateAllDogs,
	filterDogTemp,
}) => {
	const [order, setOrder] = useState([]);
	useEffect(() => {
		getAllDogs();
		getTemperaments();
	}, [getAllDogs, getTemperaments]);
	/* 
  Total dogss  --> filterDogTemp
  current page --> pagina actual
  DogsPerPage  --> 8
  */
	//Pagination
	let warn = order;
	warn.concat('hola');
	const [currentPage, setCurrentPage] = useState(1);
	const DOG_PER_PAGE = 8;
	const indexOfLastPost = currentPage * DOG_PER_PAGE; // 8
	const indexOfFirstPost = indexOfLastPost - DOG_PER_PAGE; //
	const currentDogs = filterDogTemp.slice(indexOfFirstPost, indexOfLastPost);
	let pagination = Math.ceil(filterDogTemp.length / DOG_PER_PAGE);
	let arrayPaged = Array.from({length: pagination}, (__, i) => i + 1);

	const handlePrevClick = (e) => {
		setCurrentPage((old) => old - 1);
	};

	const handleBtnClick = ({target}) => {
		const {value} = target;
		setCurrentPage(parseInt(value));
	};

	const handleNextClick = (e) => {
		setCurrentPage((old) => old + 1);
	};

	//fin paginacion

	let optionAr = ['A-Z', 'Z-A', 'Less Weight', 'More Weight'];

	//hago el filtrado le mando el valor del option y el array GENERAL que contiene TODOS los perros

	const handleTempChange = ({target: {value}}) => {
		let tempsf = filterByTemp(value, allDogs);
		updateAllDogs(tempsf);
		setCurrentPage(1);
	};

	//filtro y le mando el valor del option y el array que contiene los perros con el array con perros filtrados

	const handleOrderChange = ({target: {value}}) => {
		setOrder([getFilteredDogs(value, filterDogTemp)]);
	};
	const handleOrderChange2 = ({target: {value}}) => {
		let dogOwner = filterByOwner(value, allDogs);
		updateAllDogs(dogOwner);
		setCurrentPage(1);
	};
	const handleOnClick = () => {
		updateAllDogs([]);
		getAllDogs();
	};

	if (filterDogTemp.length === 0) {
		return <Spinner />;
	}
	return (
		<DogsDiv>
			<div>
				<SearchBar />
			</div>
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
							temperaments.map(({name}) => <option key={name}>{name}</option>)}
					</select>
				</div>
				<div>
					<button className='btn__reset' onClick={handleOnClick}>
						Reset Breeds 🔄
					</button>
				</div>
			</div>
			<div className='cnt__dogs'>
				{currentDogs &&
					currentDogs.map(({name, id, temperament, image, weight}) => (
						<CardDog
							handleOnClick={handleOnClick}
							key={name}
							id={id}
							name={name}
							temperament={temperament}
							image={image}
							weight={weight}
						/>
					))}
			</div>
			<div>
				<h2 className='page__h2'>Page {currentPage}</h2>
			</div>
			<DivBtnPaged>
				{currentPage > 1 ? (
					<button onClick={handlePrevClick}>{'<<<'}</button>
				) : null}
				{arrayPaged &&
					arrayPaged.map((e) => (
						<button onClick={handleBtnClick} value={e} key={e}>
							{e}
						</button>
					))}
				{pagination !== currentPage ? (
					<button onClick={handleNextClick}>{'>>>'}</button>
				) : null}
			</DivBtnPaged>
		</DogsDiv>
	);
};

const mapStateToProps = ({allDogs, temperaments, filterDogTemp}) => {
	return {
		allDogs,
		temperaments,
		filterDogTemp,
	};
};

export default connect(mapStateToProps, {
	getAllDogs,
	getTemperaments,
	updateAllDogs,
})(Dogs);
