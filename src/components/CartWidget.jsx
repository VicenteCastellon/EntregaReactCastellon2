import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Link to="/cart">
    <ShoppingCart />
    <span>0</span>
    </Link>
);
};

export default CartWidget;