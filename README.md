# react-expand-text
A simple React component that shrinks and expands long text. If the `text` length is
longer than `maxLength` the text field will collapse, and truncated text will be replaced
with an ellipsis. The ellipsis can be placed in the middle (default) or at the end of the text.
Clicking the text will alternately expand/collapse the long text.

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
* `truncateAtEnd`: If true, truncates at the end with ellipsis. If false (default), shows beginning and end with ellipsis in the middle (boolean, optional)

## Examples

### Middle truncation (default)
```javascript
<ExpandText
  maxLength={30}
  text="I am a long string that is longer than max length"
/>
// Output: "I am a long st...max length" (click to expand)
```

### End truncation
```javascript
<ExpandText
  maxLength={30}
  text="I am a long string that is longer than max length"
  truncateAtEnd
/>
// Output: "I am a long string that is lo..." (click to expand)
```

### Complete example
```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import ExpandText from 'react-expand-text';

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
```
