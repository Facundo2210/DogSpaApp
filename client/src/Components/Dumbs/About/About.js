import React from 'react';
import AboutStyle from './Styled';
import react from '../../../Assets/react.svg';
import redux from '../../../Assets/redux.svg';
import express from '../../../Assets/express.svg';
import postgresql from '../../../Assets/postgresql.svg';
import sequelize from '../../../Assets/sequelize.svg';

const Logos = [
	{
		name: react,
		url: 'https://es.reactjs.org/',
	},
	{
		name: redux,
		url: 'https://es.redux.js.org/',
	},
	{
		name: express,
		url: 'https://expressjs.com/',
	},
	{
		name: postgresql,
		url: 'https://www.postgresql.org/',
	},
	{
		name: sequelize,
		url: 'https://sequelize.org/',
	},
];

const About = () => {
	return (
		<AboutStyle>
			<h1 style={{textAlign: 'center'}} className='Title_About'>
				About
			</h1>

			{Logos?.map(({name, url}, i) => (
				<button key={i} height={100}>
					<img src={name} alt='l' width={100} height={100} />
				</button>
			))}
		</AboutStyle>
	);
};

export default About;
