// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      {/* Asegura que NavBar esté fuera de Routes para que siempre se muestre */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;








