// NavBar.jsx
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget';

const NavBar = () => {
  return (
    <div className="relative">
      <div className="background-box"></div>
      <nav className="navbar">
        {/* Enlace al logo que redirige a '/' */}
        <Link to="/">
          <img src="/logo-cuadrado-04.png" alt="Logo de la tienda" className="logo" />
        </Link>

        <ul className="flex space-x-4">
          {/* Enlaces de categorías que navegan a /category/:categoryId con nombres de categoría */}
          <li><Link to="/category/vehiculos" className="text-black hover:text-blue-500">Vehículos</Link></li>
          <li><Link to="/category/ropa" className="text-black hover:text-blue-500">Ropa</Link></li>
          <li><Link to="/category/electronica" className="text-black hover:text-blue-500">Electrónica</Link></li>
        </ul>

        <div className="cart-container">
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;


