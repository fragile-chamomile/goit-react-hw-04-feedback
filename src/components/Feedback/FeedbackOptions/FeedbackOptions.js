import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonWrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option[0].toUpperCase() + option.substring(1).toLowerCase()}
        </Button>
      ))}
    </ButtonWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
