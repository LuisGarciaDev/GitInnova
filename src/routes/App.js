import React from 'react';
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register'
import { getAuth, onAuthStateChanged } from "firebase/auth";
 import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [])


  
  if (checking) {
      return (
          <h2>Cargando...</h2>
         
      )
  }
  




  return (
    <BrowserRouter>
            <Routes>

                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />


                <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login />
                    </PublicRoute>
                } />


                <Route path="/register" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Register />
                    </PublicRoute>
                } />

            </Routes>
        </BrowserRouter>
  )
}
export default App