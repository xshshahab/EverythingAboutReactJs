import React from 'react';
import Counter from './components/Counter';
import LearnRefHook from './components/LearnRefHook';

const App = () => {
  return (
    <main className=''>
      <span className='text-xl font-extrabold text-green-500'> 1: <Counter /></span>
      <span className='text-xl font-extrabold text-blue-500'> 2: <LearnRefHook /></span>
    </main>
  );
}

export default App;