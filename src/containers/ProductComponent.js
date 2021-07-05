import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);

	return (
		<React.Fragment>
			{products.map((product) => {
				const { id, image, title, price, category } = product;

				return (
					<div className="card" key={id}>
						<div className="card__image">
							<img src={image} alt={title} />
						</div>
						<div className="card__body">
							<h3 className="card__title">{title}</h3>
							<p className="card__price">$ {price}</p>
							<p className="card__meta">{category}</p>
						</div>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default ProductComponent;
