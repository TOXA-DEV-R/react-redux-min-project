import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProducts } from '../redux/actions/productActions';

const ProductDetails = () => {
	const [ loading, setLoading ] = useState(true);
	const { category, description, image, price, title } = useSelector((state) => state.product);
	const { id } = useParams();
	const dispatch = useDispatch();

	const fetchProductDetails = async () => {
		const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => {
			console.log('Err', err);
		});
		dispatch(selectedProducts(response.data));
		setLoading(!loading);
	};

	useEffect(() => {
		fetchProductDetails();
	}, []);

	if (loading) {
		return <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Loading...</h1>;
	}
	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="new-card">
						<div className="new-card__image">
							<img src={image} alt={title} />
						</div>
						<div className="new-card__body">
							<h2 className="new-card__title">{title}</h2>
							<div className="new-card__price">
								<p>${price}</p>
							</div>
							<div className="new-card__category">
								<p>{category}</p>
							</div>
							<p className="new-card__description">{description}</p>
							<button className="new-card__btn">Add to Card</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProductDetails;
