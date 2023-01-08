import React from 'react';
import cl from "./CardItem.module.css";

const CardItem = ({data}) => {
	return (
		<div className={cl.card_item}>
			<img src={data.image}></img>
			<div>{data.price}</div>
			<b>{data.title}</b>
		</div>
	)
}

export default CardItem;