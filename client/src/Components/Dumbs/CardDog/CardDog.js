import React from 'react';
import {Link} from 'react-router-dom';
import {CntCardDog, Btn, CntCardDog2} from './Styled';
import Santa from '../../../Assets/AyudanteSanta.png';

const CardDog = ({id, name, temperament, image, handleOnClick}) => {
	temperament && (temperament = temperament.split(','));

	return name === "The breed you are looking for doesn't exist" ? (
		<CntCardDog2>
			<h1 className='card__title'>{name}</h1>
			<img className='card__img' src={image ? image.url : Santa} alt='Imagen' />
			<Link to='/dogs'>
				<Btn onClick={handleOnClick}>Back to Home</Btn>
			</Link>
		</CntCardDog2>
	) : (
		<CntCardDog>
			<h3 className='card__title'>{name}</h3>
			<img className='card__img' src={image ? image.url : Santa} alt='Imagen' />
			<h3 className='title_temp' style={{color: '#57837B'}}>
				Temperaments
			</h3>
			<div className='div__temps'>
				{temperament && temperament.map((e, i) => <p key={i}>{e}</p>)}
			</div>
			<div className='card__buttons'>
				<Link to={`/dogs/${id}`}>
					<Btn>More Info</Btn>
				</Link>
			</div>
		</CntCardDog>
	);
};

export default CardDog;
