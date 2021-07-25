import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {StyledDIV, IMG_H1_DIV} from './Styled';
import image from '../../../Assets/LogoFeeth.png';
import Hamb from './Hamburger/Hamburger';
const navigation = [
	{name: 'Home', host: '/dogs'},
	{name: 'About', host: '/about'},
	{name: 'Create Breed', host: '/add'},
];

export function Nav() {
	const [menu, setMenu] = useState(true);
	return (
		<StyledDIV>
			<IMG_H1_DIV>
				<Link to='/dogs'>
					<img className='doggy' src={image} alt='dog' />
				</Link>
				<h1>Doggys</h1>
			</IMG_H1_DIV>
			<div className='div_web'>
				{navigation?.map(({name, host}, i) => (
					<Link
						key={i}
						className='home__btn'
						to={`${host}`}
						onClick={() => setMenu(!menu)}
					>
						{name}
					</Link>
				))}
			</div>
			<div className='div_mobile'>{<Hamb setMenu={setMenu} menu={menu} />}</div>
		</StyledDIV>
	);
}

export default Nav;
