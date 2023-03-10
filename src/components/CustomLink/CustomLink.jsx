import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import cl from "./CustomLink.module.css";

const CustomLink = ({ to, children, ...props }) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className={isActive ? cl.pressed : cl.unpressed}>
			<Link to={to} {...props}>{children}</Link>
		</li>
	)
}

export default CustomLink
