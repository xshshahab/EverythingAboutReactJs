import React from 'react';
import Counter from './components/Counter';
import LearnRefHook from './components/LearnRefHook';
import UniqueId from './components/UniqueId';

const App = () => {
  return (
    <main className=''>
      <span className='text-xl font-extrabold text-green-500'> 1: <Counter /></span>
      <span className='text-xl font-extrabold text-blue-500'> 2: <LearnRefHook /></span>
      <span className='text-xl font-extrabold text-red-500'> 3.: <UniqueId /></span>
    </main>
  );
}

export default App;