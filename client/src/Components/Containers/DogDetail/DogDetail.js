import React, {useEffect} from 'react';
import {getDogDetail, cleanDogDetail} from '../../../Redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../Dumbs/Spinner/Spinner';
import noneImage from '../../../Assets/DefectDog.jpeg';
import DogDetailDiv from './Styled';
import {useParams} from 'react-router-dom';

const DogDetail = () => {
	let idDog = useParams().id;
	const dogDetail = useSelector((state) => state.dogDetail);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDogDetail(idDog));
		return () => dispatch(cleanDogDetail());
	}, [dispatch, idDog]);

	const {name, image, weight, temperaments, life_span, height, temperament} =
		dogDetail;

	let newTemps;
	if (temperaments) {
		newTemps =
			temperaments &&
			temperaments.map(({name}) => {
				return name;
			});
	}
	return (
		<DogDetailDiv>
			{!dogDetail.hasOwnProperty('name') ? (
				<Spinner />
			) : (
				<div className='div__cnt'>
					<div className='h1__name'>
						<h1>{name}</h1>
					</div>
					<img src={image ? image.url : noneImage} alt='IMAGEN' />
					<div>
						<h3>⚖️ Weight: {weight?.metric ? weight.metric : weight} KGS</h3>
						<h3>
							🐕 Temperaments:{' '}
							{newTemps
								? newTemps.join(', ')
								: temperament
								? temperament
								: 'I Have no temperaments'}
						</h3>
						<h3>📅 Life Span: {life_span} </h3>
						<h3>📏 Height: {height?.metric ? height.metric : height} Ctms</h3>
					</div>
				</div>
			)}
		</DogDetailDiv>
	);
};

export default DogDetail;
