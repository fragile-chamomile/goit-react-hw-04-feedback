import { useState } from 'react';
import PropTypes from 'prop-types';
import Section from '../Feedback/Section/Section';
import FeedbackOptions from '../Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from '../Feedback/Statistics/Statistics';
import Notification from '../Feedback/Notification/Notification';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = button => {
    switch (button) {
      case 'good':
        return setGood(good => good + 1);

      case 'neutral':
        return setNeutral(neutral => neutral + 1);

      case 'bad':
        return setBad(bad => bad + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((100 / (good + neutral + bad)) * good);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Feedback;
