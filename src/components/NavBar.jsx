import CartWidget from './CartWidget';  




const NavBar = () => {
return (
    <div className="relative">
      {/* Fondo rectangular detrás */}
    <div className="background-box"></div>

    <nav className="navbar">
        {/* LOGO */}
        <img src="/logo-cuadrado-04.png" alt="Logo de la tienda" className="logo" />


        <ul className="flex space-x-4">
        <li><a href="#" className="text-white hover:text-blue-200">Inicio</a></li>
        <li><a href="#" className="text-white hover:text-blue-200">Productos</a></li>
        <li><a href="#" className="text-white hover:text-blue-200">Contacto</a></li>
        </ul>

        <div className="cart-container">
        <CartWidget />
        </div>
    </nav>
    </div>
);
};

export default NavBar;

