import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
