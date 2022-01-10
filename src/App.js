import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

import './App.css';
// Source: https://www.w3schools.com/react/react_css.asp

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  // Sem desestruturar:
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   }, this.formValidation);
  // }

  // Desestruturado:
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.formValidation);
  }

  formValidation = () => {
    const sumOfAttr = 210;
    const maxAttr = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validation = (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttr)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttr)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttr)
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= sumOfAttr
    );

    this.setState({ isSaveButtonDisabled: !validation });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1> Adicionar nova carta </h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
        />
        <h2>Carta: </h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}
export default App;
