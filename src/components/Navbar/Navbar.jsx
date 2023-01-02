import React from 'react';
import cl from "./Navbar.module.css";
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { CiHospital1, CiCircleAlert, CiMoneyBill } from "react-icons/ci";

const Navbar = () => {
	return (
		<div className={cl.nav}>
			<Link to='/' className={cl.site_title}>
				<CiHospital1 />
			</Link>
			<ul>
				<CustomLink to='/pricing'>
					<CiMoneyBill />
				</CustomLink>
				<CustomLink to='/about'>
					<CiCircleAlert />
				</CustomLink>
			</ul>
		</div>
	);
}

export default Navbar;
