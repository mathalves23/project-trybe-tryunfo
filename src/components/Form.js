import React from 'react';

class Form extends React.Component {
  render() {
    return (
      // Source: https://pt-br.reactjs.org/docs/forms.html
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" data-testid="name-input" id="name" />
        </label>
        <label htmlFor="desc">
          Descrição:
          <input type="textarea" name="desc" data-testid="description-input" id="desc" />
        </label>
        <label htmlFor="attr01">
          Attr01:
          <input type="number" name="attr01" data-testid="attr1-input" id="attr01" />
        </label>
        <label htmlFor="attr02">
          Attr02:
          <input type="number" name="attr02" data-testid="attr2-input" id="attr02" />
        </label>
        <label htmlFor="attr03">
          Attr03:
          <input type="number" name="attr03" data-testid="attr3-input" id="attr03" />
        </label>
        <label htmlFor="name">
          Imagem:
          <input type="text" name="image" data-testid="image-input" id="image" />
        </label>
        <label htmlFor="select">
          <select data-testid="rare-input" id="select">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option selected value="muito-raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          <input name="check" type="checkbox" id="check" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>
        {/* <input type="button" value="Salvar" data-testid="save-button" id="submit" /> */}
        <button type="submit" data-testid="save-button">Registrar</button>
        {/* Source: https://pt-br.reactjs.org/docs/handling-events.html */}
      </form>
    );
  }
}

export default Form;
