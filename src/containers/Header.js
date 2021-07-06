import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BasketItems from '../components/BasketItems';
const Header = () => {
	const cardCounter = useSelector((state) => state.productCardCounter.products);
	const [ handlerBtn, setHandlerBtn ] = useState(false);

	return (
		<div className="menu">
			<div className="container">
				<h2>Fakeshop</h2>
				<button className="basket-btn" onClick={() => setHandlerBtn(!handlerBtn)}>
					<strong>{cardCounter.length || '0'}</strong>
				</button>
			</div>
			{handlerBtn && <BasketItems />}
		</div>
	);
};

export default Header;
