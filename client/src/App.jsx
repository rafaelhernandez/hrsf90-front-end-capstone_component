import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="div-app">
        App goes here this would fail
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'));
