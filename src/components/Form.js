import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      // Source: https://pt-br.reactjs.org/docs/forms.html
      <div>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="desc">
            Descrição:
            <input
              type="textarea"
              name="desc"
              data-testid="description-input"
              id="desc"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr01">
            Attr01:
            <input
              type="number"
              name="attr01"
              data-testid="attr1-input"
              id="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr02">
            Attr02:
            <input
              type="number"
              name="attr02"
              data-testid="attr2-input"
              id="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr03">
            Attr03:
            <input
              type="number"
              name="attr03"
              data-testid="attr3-input"
              id="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="name">
            Imagem:
            <input
              type="text"
              name="image"
              data-testid="image-input"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="raridade">
            Raridade
            <select
              data-testid="rare-input"
              id="raridade"
              name="raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option selected value="muito-raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="check">
            <input
              name="check"
              type="checkbox"
              id="check"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
          {/* <input type="button" value="Salvar" data-testid="save-button" id="submit" /> */}
          <button
            type="submit"
            data-testid="save-button"
            id="salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
          {/* Source: https://pt-br.reactjs.org/docs/handling-events.html */}
        </form>
      </div>
    );
  }
}

Form.propTypes = { cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired };

export default Form;
