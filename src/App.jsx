import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Homepage from './Pages/Homepage'
import AuthPage from './Pages/AuthPages/AuthPage'
import Sidebar from './components/Sidebar'

function App() {
  const [authUser] = useState(false); // TODO: Replace with actual authentication state from context
  return (

    <>
      <Routes>

        <Route path="/" element={authUser ? <Homepage /> : <Navigate to='/auth' />}>Home</Route>
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />}>Auth page</Route>

        <Route path="/sidebar" element={<Sidebar />}>  Sidebar </Route>
      </Routes>
    </>

  )
}

export default App
