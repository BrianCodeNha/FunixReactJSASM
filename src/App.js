
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">        
        <Main />
      </div>
    );
  }
}

export default App;
