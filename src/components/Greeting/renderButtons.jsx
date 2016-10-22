import React from 'react';

import { Button } from 'react-bootstrap';

const buttonStyles = [
  '',
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'link'
];

const renderButtons = () => {
  return buttonStyles.map((style, index) => {
    if (style === '') {
      return (
        <Button key={index}>Default</Button>
      );
    }
    return (
      <Button key={index} bsStyle={style}>{style}</Button>
    );
  });
};

export default renderButtons;
