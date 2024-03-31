import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderApp from './components/HeaderApp';
import Races from './components/Races';
import Login from './components/login';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/races/:year' element={<Races />} />
        </Routes>
        {/* <HeaderApp /> */}
        {/* <Login /> */}
      </main>

    </>
  )
}

export default App
