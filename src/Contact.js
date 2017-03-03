import React from 'react';
import { Link } from 'react-router-dom';

// Converted from a class based component to a functional component
const Contact = (props) => {
  return (
    <li className="contact" onClick={() => props.handleOnClick(props.id)}>
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <h2>{props.name}</h2>
        {props.occupation}
        <div className="profileLink">
          <Link to={`/profile/${props.id}`} className="contact-link">
            <button
              className="details"
              >Details
            </button>
          </Link>
          <button
            // Button to delete contact
            onClick={() => props.onDeleteContact(props.id)}
            className="fa fa-trash-o"
            aria-hidden="true"
          />
        </div>
      </div>
    </li>
  );
};

// ESLint React prop-type validation
Contact.propTypes = {
  id: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired,
  handleOnClick: React.PropTypes.func.isRequired,
  onDeleteContact: React.PropTypes.func.isRequired
};

export default Contact;
