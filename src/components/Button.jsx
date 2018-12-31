import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  // prescribed variable name
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Enviar';

    return <button className="ui button primary">{text}</button>;
  }
}

// alternative method to set context type
// Button.contextType = LanguageContext;

export default Button;
