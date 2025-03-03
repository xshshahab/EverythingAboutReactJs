import React from 'react';
import Form from './components/Form';
import './App.css';
import ToastContainer from 'react-hot-toast';

const App = () => {
  return (
    <div className='relative'>
      <div className="radial-gradient-background"></div>
      <Form />
      <ToastContainer />
    </div>
  );
}

export default App;
