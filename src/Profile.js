import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
  constructor() {
    super();

    this.state = {
      contact: null
    };
  }


  componentDidMount() {
    axios.get(`/contacts/${this.props.match.params.id}`)
      .then(resp => {
        this.setState({
          contact: resp.data
        });
      })
      /* eslint no-console: 0 */
      .catch(err => console.log(`Error! ${err}`));
  }


  renderProfile() {
    return (
      <div className="profile">
        <div className="background">
          <div className="image-cropper">
            <img src={this.state.contact.avatar} alt="avatar" />
          </div>
          <div className="contact-info">
            <h2>Name: {this.state.contact.name}</h2>
            <span>Occupation: {this.state.contact.occupation}</span>
            <h3>Bio:</h3>
            <p>{this.state.contact.bio}</p>
          </div>
        </div>
      </div>
    );
  }


  render() {
    if (!this.state.contact) {
      return <h2>Loading...</h2>;
    }

    return this.renderProfile();
  }
}


// ESLint React prop-type validation
Profile.propTypes = {
  match: React.PropTypes.object.isRequired,
};


export default Profile;
