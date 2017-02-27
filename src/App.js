import React, { Component } from 'react';
import Profile from './Profile';
import Contacts from './Contacts';
import { BrowserRouter, Match, Miss } from 'react-router';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="router">
          <Match exactly pattern="/" component={Contacts} />
          <Match pattern="/profile/:id" component={Profile} />
          <Miss render={() => <h2>Not Found!</h2>} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
