import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Hamb} from './styled';

const nav = [
	{name: 'Home', host: '/dogs'},
	{name: 'About', host: '/about'},
	{name: 'Create Breed', host: '/add'},
];

const Hamburger = () => {
	const [toggle, setToggle] = useState(true);
	return (
		<Hamb>
			<div
				className={`${toggle ? 'hamb-container' : 'hamb-container open'}`}
				onClick={() => setToggle(!toggle)}
			>
				<div className='hamb'></div>
			</div>

			<div className={`${toggle ? 'menu' : 'menu slide'}`}>
				{nav?.map(({name, host}, i) => (
					<Link
						key={i}
						className='home__btn'
						to={`${host}`}
						onClick={() => setToggle(!toggle)}
					>
						{name}
					</Link>
				))}
			</div>
		</Hamb>
	);
};

export default Hamburger;
