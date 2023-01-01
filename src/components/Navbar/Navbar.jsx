import React from 'react';
import cl from "./Navbar.module.css";
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className={cl.nav}>
			<Link to='/' className={cl.site_title}>Site Name</Link>
			<ul>
				<CustomLink to='/pricing'>Pricing</CustomLink>
				<CustomLink to='/about'>About</CustomLink>
			</ul>
		</div>
	);
}
export default Navbar;
