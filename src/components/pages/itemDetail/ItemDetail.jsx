// ItemDetail.jsx
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) => {
return (
    <div>
    <h1>{item.title}</h1>
    <img src={item.imageUrl} alt={item.title} />
    <p>{item.description}</p>
    <p>Precio: ${item.price}</p>
    </div>
);
};

ItemDetail.propTypes = {
item: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
}).isRequired,
};

export default ItemDetail;

