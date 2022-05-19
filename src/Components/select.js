import React from 'react';
import './select.css';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange} className='selectLogin' name='role'>
      <option value="">Selecione o cargo</option>
      <option value="admin">Administração</option>
      <option value="chef">Cozinheiro</option>
      <option value="waiter">Garçom</option>
    </select>
    );
  }
}

export default Select;