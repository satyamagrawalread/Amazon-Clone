import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Item from './components/item/Item';
import Sample1 from './components/sample/Sample1';
import Cart from './cart/Cart';
import Maincomp from './components/home/maincomp';
import SignedUp from './components/login/SignedUp';

function App() {
  // const location = useLocation();
  const [count, setCount] = useState(0)
  const [showHmenu, setShowHmenu] = useState(false);

  

  const pathWithoutHeaders = ['/login', '/signup'];
  const hideHeaders = pathWithoutHeaders.includes(location.pathname)

  return (
    <>
    {/* <h5>Hello World</h5> */}
      <BrowserRouter>
      
        
        <div className={showHmenu ? 'slide' : ''}>
        {hideHeaders ? null : <Header />}
          <div className={hideHeaders ? '' : 'main'}>
            
            {hideHeaders ? null : <SecondHeader showHmenu={showHmenu} setShowHmenu={setShowHmenu} />}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='home' element={<Maincomp />} />
              <Route path='item/:id' element={<Item />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='sample1' element={<Sample1 />} />
              <Route path='cart' element={<Cart />} />
              <Route path='signed/:name' element={<SignedUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
