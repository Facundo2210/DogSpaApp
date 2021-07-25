import React from 'react';
import {useSelector} from 'react-redux';
import CntCard from '../Cards/CntCards';
import {DivBtnPaged} from '../Dogs/Styled';
import DogsDiv from './Styled';

const Pagination = ({setCurrentPage, currentPage}) => {
	const filterDogTemp = useSelector((state) => state.filterDogTemp);
	const DOG_PER_PAGE = 12;
	const indexOfLastPost = currentPage * DOG_PER_PAGE;
	const indexOfFirstPost = indexOfLastPost - DOG_PER_PAGE;
	const currentDogs = filterDogTemp.slice(indexOfFirstPost, indexOfLastPost);

	let pagination = Math.ceil(filterDogTemp.length / DOG_PER_PAGE);
	let arrayPaged = Array.from({length: pagination}, (__, i) => i + 1);

	const handlePrevNextClick = ({target: {name}}) => {
		if (name === 'prev') return setCurrentPage((old) => old - 1);
		setCurrentPage((old) => old + 1);
	};

	return (
		<DogsDiv cant={currentDogs.length}>
			<CntCard currentDogs={currentDogs} />
			<DivBtnPaged>
				{currentPage > 1 ? (
					<button onClick={handlePrevNextClick} name='prev'>
						{'<<<'}
					</button>
				) : null}
				<div>
					<h2 className='page__h2'>
						Page {currentPage} / {arrayPaged.length}
					</h2>
				</div>
				{pagination !== currentPage ? (
					<button onClick={handlePrevNextClick} name='next'>
						{'>>>'}
					</button>
				) : null}
			</DivBtnPaged>
		</DogsDiv>
	);
};

export default Pagination;
