import React, { useEffect, useState } from 'react'
import pageCl from "./Page.module.css";
import homeCl from "./Home.module.css";
import CardItem from '../components/CardItem/CardItem.jsx';
import axios from 'axios';
import { useQuery } from 'react-query';

const Home = () => {
	const { isLoading, error, data } = useQuery(
		"posts",
		async () => await axios("https://fakestoreapi.com/products?limit=5")
	)

	return (
		<div className={`${pageCl.page} ${homeCl.home}`}>
			<h1>Home page</h1>
			{isLoading && <div>Loading...</div>}
			{error && (
				<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
			<div className={homeCl.row}>
				{data &&
					data.data.map(item => (
						<CardItem key={item.id} data={item} />
					))
				}
			</div>
		</div>
	)
}

export default Home