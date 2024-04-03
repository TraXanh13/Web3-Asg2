import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import HeaderApp from './components/HeaderApp';
import Races from './components/Races';
import Login from './components/login';

const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_ANON_KEY);

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/races/:season/:ascend' element={<Races supabase={supabase}/>} />
        </Routes>
        {/* <HeaderApp /> */}
        {/* <Login /> */}
      </main>

    </>
  )
}

export default App
