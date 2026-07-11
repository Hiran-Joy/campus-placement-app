import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchRegistration from './components/SearchRegistration'
import AddRegistration from './components/AddRegistration'
import DeleteRegistration from './components/DeleteRegistration'
import ViewRegistrations from './components/ViewRegistrations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchRegistration />
    <AddRegistration/>
    <DeleteRegistration/>
    <ViewRegistrations/>
    </>
  )
}

export default App