import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Nombre';

    return (
      <div className="ui field">
        <label htmlFor="name">{text} </label>
        <input type="text" style={{ maxWidth: '300px' }} />
      </div>
    );
  }
}

export default Field;
