# react-expand-text
A simple React component that shrinks and expands long text. If the `text` length is
longer than `maxLength` the text field will collapse, and truncated text will be replaced
with an ellipsis. Clicking the text will alternately expand/collapse the long text.

## Installation
```bash
npm install --save react-expand-text
```

## Usage
```javascript
ExpandText.propTypes = {
  text: React.PropTypes.string.isRequired,
  maxLength: React.PropTypes.number.isRequired,
  className: React.PropTypes.string
};
```

### Props
* `text`: Text to display
* `maxLength`: Max length of text
* `className`: *Optional* class name to be applied to the inner span

## Example
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ExpandText from 'react-expand-text';

class App extends React.Component {
  render() {
    return (
      <ExpandText
        maxLength={10}
        className='my-css-class'
        text={'I am a long string that is longer than max length'}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```
