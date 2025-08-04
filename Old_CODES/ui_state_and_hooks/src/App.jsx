import React from 'react';
import LearningPage from './lib/LearningPage';
import ExamplePractice from './lib/ExamplePractice';
import Solution from './lib/Solution';

const App = () => {
  return (
    <>
      <LearningPage />
      <br /><hr /><br />
      <ExamplePractice />
      <br /><hr /><br />
      <Solution />
    </>
  )
}

export default App