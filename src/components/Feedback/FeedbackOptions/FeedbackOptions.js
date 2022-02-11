import React from 'react';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

function FeedbackOptions({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={onLeaveFeedbackGood}>
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedbackNeutral}>
        Neutral
      </Button>
      <Button type="button" onClick={onLeaveFeedbackBad}>
        Bad
      </Button>
    </ButtonWrapper>
  );
}

export default FeedbackOptions;
