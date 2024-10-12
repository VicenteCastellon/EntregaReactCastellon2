import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{greeting}</h2>
    <p className="text-center text-gray-600">Aquí se mostrarán los productos próximamente.</p>
    </div>
);
};


ItemListContainer.propTypes = {
greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
