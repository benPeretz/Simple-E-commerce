import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (
    <div className="App">

      {/* wrap evrething cause we want that the all app will be access to this data */}
      <ShopContextProvider>
        <BrowserRouter>

          <Nav />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </ShopContextProvider>

    </div>
  );
}

export default App;
