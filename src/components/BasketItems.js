import React from 'react';
import { useSelector } from 'react-redux';

const BasketItems = () => {
	const cardCounter = useSelector((state) => state.productCardCounter.products);

	return (
		<div className="basket__items">
			<div className="container">
				<div className="row">
					{cardCounter &&
						cardCounter.map((item, index) => {
							const { image, title, price } = item;
							return (
								<div className="basket-card" key={index}>
									<div className="basket-card__image">
										<img src={image} alt={title} />
									</div>
									<div className="basket-card__body">
										<h3 className="basket-card__title">{title}</h3>
										<p className="basket-card__price">${price}</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default BasketItems;
