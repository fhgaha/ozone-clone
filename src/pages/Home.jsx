import React, { useEffect, useState } from 'react'
import pageCl from "./Page.module.css";
import homeCl from "./Home.module.css";
import CardItem from '../components/CardItem/CardItem.jsx';

const Home = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=5')
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error: status is ${response.status}`);
				}
				return response.json();
			})
			.then(data => {
				console.log(data);
				setData(data);
				setError(null);
			})
			.catch(err => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
			});

		// return () => {
		// 	setData(null);
		// 	setLoading(true);
		// 	setError(null);
		// }
	}, []);

	return (
		<div className={`${pageCl.page} ${homeCl.home}`}>
			<h1>Home page</h1>
			{loading && <div>Loading...</div>}
			{error && (
				<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
			<div className={homeCl.row}>
				{data &&
					data.map(obj => (
						<CardItem data={obj} />
					))
				}
			</div>
		</div>
	)
}

export default Home