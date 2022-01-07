import React from 'react';
import Form from './components/Form';
import './App.css';
// Source: https://www.w3schools.com/react/react_css.asp

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Adicionar nova carta </h1>
        <Form />
      </div>
    );
  }
}

export default App;
