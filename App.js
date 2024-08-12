import Header from './components/Header'
import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [query , setQuery] = useState('');
  return (
    <>
    <Header/>
     <Outlet/>
    </>
  )
}

export default App