import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import './greeting.css';

const Greeting = ({ name }) => {
  return (
    <div className="greeting">
      Hello, {name}! Fuck yeah
      <br />
      
      <Button>Default</Button>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <Button bsStyle="primary">Primary</Button>

      {/* Indicates a successful or positive action */}
      <Button bsStyle="success">Success</Button>

      {/* Contextual button for informational alert messages */}
      <Button bsStyle="info">Info</Button>

      {/* Indicates caution should be taken with this action */}
      <Button bsStyle="warning">Warning</Button>

      {/* Indicates a dangerous or potentially negative action */}
      <Button bsStyle="danger">Danger</Button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <Button bsStyle="link">Link</Button>

      <i className="fa fa-linkedin" />
      <i className="fa fa-github" />
      <i className="fa fa-twitter" />

    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
