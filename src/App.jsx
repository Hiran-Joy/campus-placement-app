import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import SearchReg from './components/SearchReg'
import DeleteReg from './components/DeleteReg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewRegistrations from './components/ViewRegistrations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>

<Routes>

<Route path='/' element={<AddReg/>} />
<Route path='/search' element={<SearchReg/>} />
<Route path='/delete' element={<DeleteReg/>} />
<Route path='/view' element={<ViewRegistrations/>} />

</Routes>

</BrowserRouter>
    </>
  )
}

export default App