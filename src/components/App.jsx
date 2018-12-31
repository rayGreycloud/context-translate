import React, { Component } from 'react';

import UserCreate from './UserCreate';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => this.setState({ language });

  render() {
    return (
      <div className="ui container" style={{ paddingLeft: '15px' }}>
        <div className="ui header" style={{ marginTop: '15px' }}>
          Select a language:{'  '}
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag mx"
            onClick={() => this.onLanguageChange('spanish')}
          />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;