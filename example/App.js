import React from 'react';
import ReactDOM from 'react-dom';
import ExpandText from '../src/expandtext.js';

class App extends React.Component {
  render() {
    return (
        <div>
            <ExpandText
                maxLength={10}
                className='my-css-class'
                text={'I am a long string that is longer than max length'}
            />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
