import React from 'react';
import { createRoot } from 'react-dom/client';
import ExpandText from '../src/expandtext.js';

const App = () => {
  return (
    <div>
      <ExpandText
        maxLength={10}
        className='my-css-class'
        text={'I am a long string that is longer than max length'}
      />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
