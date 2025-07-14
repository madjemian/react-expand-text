# react-expand-text
A simple React component that shrinks and expands long text. If the `text` length is
longer than `maxLength` the text field will collapse, and truncated text will be replaced
with an ellipsis. Clicking the text will alternately expand/collapse the long text.

## Installation
```bash
npm install --save react-expand-text
```

## Requirements
- Node.js >= 18.0.0
- React >= 18.0.0

## Usage
```javascript
import React from 'react';
import ExpandText from 'react-expand-text';

const MyComponent = () => {
  return (
    <ExpandText
      text="Your long text here"
      maxLength={50}
      className="optional-css-class"
    />
  );
};
```

### Props
* `text`: Text to display (string, required)
* `maxLength`: Max length of text (number, required)
* `className`: Optional CSS class name to be applied to the span element

## Example
```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExpandText from 'react-expand-text';

const App = () => {
  return (
    <ExpandText
      maxLength={10}
      className='my-css-class'
      text={'I am a long string that is longer than max length'}
    />
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```
