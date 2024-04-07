import {AppContext} from './F1Context';
import { useContext } from 'react';
import Login from './components/login';
import Home from './components/Home';
import { createClient } from "@supabase/supabase-js";

const App = () => {
  const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_ANON_KEY);
  const {loggedIn} = useContext(AppContext);
  return (
    <div>{loggedIn ? <Home supabase={supabase}/> : <Login />}</div>
  )
}

export default App
