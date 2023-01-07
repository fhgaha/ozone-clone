import React from 'react';
import cl from "./CardItem.module.css";

const CardItem = ({data}) => {
	return (
		<div className={cl.card_item}>
			<img src={data.image}></img>
			<b>{data.title}</b>
			<p>{data.description}</p>
		</div>
	)
}

export default CardItem;