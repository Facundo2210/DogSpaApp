import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDIV, IMG_H1_DIV, BUTTONS_DIV} from './Styled';
import image from '../../../Assets/LogoFeeth.png';

export function Nav() {
	return (
		<StyledDIV>
			<IMG_H1_DIV>
				<Link to='/dogs'>
					<img className='doggy' src={image} alt='dog' />
				</Link>
				<h1>Breeds</h1>.
			</IMG_H1_DIV>
			<BUTTONS_DIV>
				<Link className='home__btn' to='/dogs'>
					Home
				</Link>
				<Link className='home__btn' to='/add'>
					Create Breed
				</Link>
			</BUTTONS_DIV>
		</StyledDIV>
	);
}

export default Nav;
