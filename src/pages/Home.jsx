import React from 'react'
import cl from "./Page.module.css";
import CardItem from '../components/CardItem/CardItem.jsx';

const Home = () => {
	return (
		<div className={cl.page}>
			<h1>Home page</h1>
			<CardItem/>
		</div>
	)
}

export default Home