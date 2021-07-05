import React, { useEffect } from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

const ProductList = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
			console.log('Err', err);
		});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<main>
			<div className="container">
				<div className="row ">
					<ProductComponent />
				</div>
			</div>
		</main>
	);
};

export default ProductList;
