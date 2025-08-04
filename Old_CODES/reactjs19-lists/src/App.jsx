import React from 'react';
import Lists from './pages/Lists';
import ParentProps from './pages/ParentProps';
import ChildrenProps from './pages/ChildrenProps';

const App = () => {
  return (
    <main>
      <Lists />
      <ParentProps />
      <ChildrenProps />
    </main>
  )
}

export default App;