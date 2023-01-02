import React from 'react';
import cl from "./Navbar.module.css";
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className={cl.nav}>
			<Link to='/' className={cl.site_title}>
				<img
					src='https://cdn-icons-png.flaticon.com/512/149/149220.png'
					alt='new'
					style={{ width: 40 }}
				/>
			</Link>
			<ul>
				<CustomLink to='/pricing'>
					<img
						src='https://cdn-icons-png.flaticon.com/512/3766/3766212.png'
						alt='new'
						style={{width: 40}}
					/>
				</CustomLink>
				<CustomLink to='/about'>
					<img
						src='https://cdn-icons-png.flaticon.com/512/3766/3766220.png'
						alt='new'
						style={{width: 40}}
					/>
				</CustomLink>
			</ul>
		</div>
	);
}

export default Navbar;
