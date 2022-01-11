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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      // Source: https://pt-br.reactjs.org/docs/forms.html
      <div>
        <form>
          <label htmlFor="name-input">
            Nome:
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <textarea
              name="cardDescription"
              data-testid="description-input"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input">
            Attr01:
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input">
            Attr02:
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            Attr03:
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input">
            Imagem:
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          {/* Source: https://pt-br.reactjs.org/docs/handling-events.html */}
          <div>
            <label htmlFor="trunfo-input">
              {hasTrunfo ? (<span> Você já tem um Super Trunfo em seu baralho. </span>)
                : (
                  <>
                    <input
                      type="checkbox"
                      name="cardTrunfo"
                      id="trunfo-input"
                      data-testid={ hasTrunfo ? '' : 'trunfo-input' }
                      onChange={ onInputChange }
                      checked={ cardTrunfo }
                      // className={ hasTrunfo ? 'd-none' : 'tryunfo' }
                    />
                    <span>Super Trunfo</span>
                  </>)}
            </label>
          </div>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired };

export default Form;
