import { AppContext } from './F1Context';
import { useContext } from 'react';
import Login from './components/login';
import Races from './components/Races';

import { createClient } from "@supabase/supabase-js";
import Dashboard from './components/Dashboard';

const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_ANON_KEY);

const App = () => {
  const { loggedIn } = useContext(AppContext);

  return (

    <div>

      {loggedIn ? <Dashboard supabase={supabase} /> : <Login />}
    </div>
  )
}

export default App
