import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {getAllDogs, getTemperaments} from '../../../Redux/actions';

import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../../Dumbs/Spinner/Spinner';
import DogsDiv from './Styled';
import Filters from '../Filters/Filters';

const Dogs = () => {
	const [order, setOrder] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch();
	const filterDogTemp = useSelector((state) => state.filterDogTemp);

	useEffect(() => {
		dispatch(getAllDogs());
		dispatch(getTemperaments());
	}, [dispatch]);

	return (
		<DogsDiv>
			{!filterDogTemp.length ? (
				<Spinner />
			) : (
				<>
					<SearchBar />
					<Filters
						order={order}
						setOrder={setOrder}
						setCurrentPage={setCurrentPage}
					/>
					<Pagination
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</>
			)}
		</DogsDiv>
	);
};

export default Dogs;
