// components/ProductList.jsx

import ProductCard from '../common/ProductCard';
import './ProductList.css';

// ProductList.jsx
export const products = [
  { id: "producto-1", title: "Producto 1", description: "descripción del producto 1", price: 19.99, imageUrl: "https://via.placeholder.com/150" },
  { id: "producto-2", title: "Producto 2", description: "descripción del producto 2", price: 29.99, imageUrl: "https://via.placeholder.com/150" },
  { id: "producto-3", title: "Producto 3", description: "descripción del producto 3", price: 39.99, imageUrl: "https://via.placeholder.com/150" }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
