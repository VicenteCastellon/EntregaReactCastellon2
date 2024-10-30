import PropTypes from 'prop-types';
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, description, price, imageUrl }) => {
return (
    <div className="product-card">
    <img src={imageUrl} alt={title} className="product-image" />
    <div className="product-info">
        <h2 className="product-title">{title}</h2>
        {}
        <Link to={`/item/${id}`}>
        <button className="product-description">{description}</button>
        </Link>
        <p className="product-price">${price}</p>
        <button className="product-button">Añadir al carrito</button>
    </div>
    </div>
);
};

ProductCard.propTypes = {
id: PropTypes.number.isRequired,
title: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
price: PropTypes.number.isRequired,
imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;


