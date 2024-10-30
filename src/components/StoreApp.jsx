// StoreApp.jsx
import NavBar from './Navbar/NavBar';
import ItemListContainer from './ItemListContainer';

function StoreApp() {
return (
    <div className="min-h-screen bg-gray-100">
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
);
}

export default StoreApp;
