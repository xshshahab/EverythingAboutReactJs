import React from 'react';
import Accordion from './components/Accordion';
import { accordionData } from './utils/content';

const App = () => {
  return (
    <div className="accordion-parent">
      {
        accordionData.map(({ id, title, content }) => {
          return <Accordion key={id} id={id} title={title} content={content} />
        })
      }
    </div>
  );
}

export default App;