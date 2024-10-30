import PropTypes from 'prop-types';
import ProductList from '../../ProductList';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      <p>Aquí tienes nuestros productos:</p>
      <ProductList />
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;




