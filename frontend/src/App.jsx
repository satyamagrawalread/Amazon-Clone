import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="main">
        <SecondHeader />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
