import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  const itemCount = 5; 

return (
    <div className="relative">
    <ShoppingCart className="text-white h-6 w-6" />
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        {itemCount}
    </span>
    </div>
);
};

export default CartWidget;