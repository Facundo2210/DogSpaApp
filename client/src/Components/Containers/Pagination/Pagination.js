import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DivBtnPaged} from '../Dogs/Styled';
import {getAllDogs, updateAllDogs} from '../../../Redux/actions';

import CardDog from '../../Dumbs/CardDog/CardDog';

const Pagination = () => {
	const dispatch = useDispatch();
	const filterDogTemp = useSelector((state) => state.filterDogTemp);

	const [currentPage, setCurrentPage] = useState(1);

	const DOG_PER_PAGE = 8;
	const indexOfLastPost = currentPage * DOG_PER_PAGE;
	const indexOfFirstPost = indexOfLastPost - DOG_PER_PAGE;
	const currentDogs = filterDogTemp.slice(indexOfFirstPost, indexOfLastPost);
	let pagination = Math.ceil(filterDogTemp.length / DOG_PER_PAGE);
	let arrayPaged = Array.from({length: pagination}, (__, i) => i + 1);
	const handleOnClick = () => {
		dispatch(updateAllDogs([]));
		dispatch(getAllDogs());
	};
	const handlePrevClick = () => {
		setCurrentPage((old) => old - 1);
	};

	const handleBtnClick = ({target}) => {
		const {value} = target;
		setCurrentPage(parseInt(value));
	};

	const handleNextClick = () => {
		setCurrentPage((old) => old + 1);
	};
	return (
		<>
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
		</>
	);
};

export default Pagination;
