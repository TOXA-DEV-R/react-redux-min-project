import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cardCounter } from '../redux/actions/productActions';

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);
	const watchCounter = useSelector((state) => state.productCardCounter);
	const dispatch = useDispatch();

	const addCounter = (id) => {
		dispatch(cardCounter(products.find((item) => item.id === id)));
		console.log(watchCounter);
	};

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
							<Link to={`/productList/${id}`} className="card__title">
								{title}
							</Link>
							<p className="card__price">$ {price}</p>
							<p className="card__meta">{category}</p>
							<button className="card__btn" onClick={() => addCounter(id)}>
								Add
							</button>
						</div>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default ProductComponent;
