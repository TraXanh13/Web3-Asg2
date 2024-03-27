import { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import HeaderApp from './components/HeaderApp';

const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_ANON_KEY);


function App() {

  return (
    <>
      <main>
        <HeaderApp supabase={supabase} />

      </main>

    </>
  )
}

export default App
