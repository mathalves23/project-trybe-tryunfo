import React from 'react';
import './App.css';
// Source: https://www.w3schools.com/react/react_css.asp
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Adicionar nova carta </h1>
        <Form />
        <h2>Carta: </h2>
        <Card />
      </div>
    );
  }
}

export default App;
