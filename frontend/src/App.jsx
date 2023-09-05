import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Login from './components/login/login';
import SignUp from './components/login/SignUp';

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
      
        {hideHeaders ? null : <Header />}
        <div className={showHmenu ? 'slide' : ''}>

          <div className="main">
            {hideHeaders ? null : <SecondHeader showHmenu={showHmenu} setShowHmenu={setShowHmenu} />}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
