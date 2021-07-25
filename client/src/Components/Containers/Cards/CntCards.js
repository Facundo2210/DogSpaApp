import React from 'react';

import {useDispatch} from 'react-redux';
import CardDog from '../../Dumbs/CardDog/CardDog';
import {getAllDogs, updateAllDogs} from '../../../Redux/actions';

const CntCard = ({currentDogs}) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(updateAllDogs([]));
		dispatch(getAllDogs());
	};

	return (
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
	);
};

export default CntCard;
