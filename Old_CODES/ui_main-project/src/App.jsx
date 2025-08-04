import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components/index';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false))
  }, []);
  

  return !loading ? (
    
    <div className='bg-gray-700 min-h-screen flex flex-wrap content-between'>
       <div className="w-full block">
        <Header />
          <main>
            TODO : <Outlet />
          </main>
        <Footer />
       </div>
    </div>

  ) : null
}

export default App
