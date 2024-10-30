// ItemDetailContainer.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import products from '../../ProductList'; 

const ItemDetailContainer = () => {
const { id } = useParams(); 
const [item, setItem] = useState(null);

useEffect(() => {
    
    const productSelected = products.find(product => product.id === id);
    setItem(productSelected);
}, [id]);

return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;

