import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderApp from './components/HeaderApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <HeaderApp/>

        {/*  */}
      </main>
      
    </>
  )
}

export default App
