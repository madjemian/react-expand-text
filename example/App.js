import React from 'react';
import { createRoot } from 'react-dom/client';
import ExpandText from '../src/expandtext.js';

const App = () => {
  return (
    <div>
      <h3>Middle truncation (default):</h3>
      <ExpandText
        maxLength={30}
        className='my-css-class'
        text={'I am a long string that is longer than max length'}
      />

      <h3>End truncation:</h3>
      <ExpandText
        maxLength={30}
        className='my-css-class'
        text={'I am a long string that is longer than max length'}
        truncateAtEnd
      />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
