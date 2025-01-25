import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './layout/mainLayout/MainLayout';
import ShowMainContent from './components/ui/ShowMainContent';
import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import AddToCart from './pages/AddToCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout with Navbar and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ShowMainContent />} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path="/addtocart" element={<AddToCart />} />
        </Route>

        {/* Additional Routes for Login and Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
