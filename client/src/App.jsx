import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './layout/mainLayout/MainLayout';
import ShowMainContent from './components/ui/ShowMainContent';
import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import AddToCart from './pages/AddToCart';
import PageNotFound from './pages/PageNotFound';
import AdminLayout from './layout/adminLayout/AdminLayout';
import Dashbard from './admin/Dashbard';
import Users from './admin/pages/Users';
import AddProduct from './admin/pages/AddProduct';
import ListProduct from './admin/pages/ListProduct';
import Reports from './admin/pages/Reports';
import RequireAdmin from './layout/adminLayout/RequireAdmin';
import Orders from './admin/pages/Orders';
import Filter from './pages/Filter';
import Checkout from './pages/Checkout';
import Account from './pages/Accout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout with Navbar and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ShowMainContent />} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
        </Route>
        
        {/* Additional Routes for Login and Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='*' element={<PageNotFound/>} />


         {/* admin layout */}
         <Route path='/admin' element={<RequireAdmin><AdminLayout/></RequireAdmin>}>
          <Route index element={<Dashbard/>}/>
          <Route path='/admin/users' element={<Users/>}/>
          <Route path='/admin/add-product' element={<AddProduct/>}/>
          <Route path='/admin/list-product' element={<ListProduct/>}/>
          <Route path='/admin/reports' element={<Reports/>}/>
          <Route path='/admin/orders' element={<Orders/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
