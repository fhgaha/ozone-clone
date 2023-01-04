import React from 'react'
import cl from "./CardItem.module.css";

const CardItem = () => {
  return (
	<div className={cl.card_item}>
		<b>Card title</b>
		<img src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'></img>
		<p>
			lorem ipsum ffffffffff fff ffffffffffffff ffffffffffff fffffffffff fffffff ffffff
			ssssss sssss sss ssssssssssssssss ss ssssssss s s. ssssssssss s. ssss .
		</p>
	</div>
  )
}

export default CardItem