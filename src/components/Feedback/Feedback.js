import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Feedback/Section/Section';
import FeedbackOptions from '../Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from '../Feedback/Statistics/Statistics';
import Notification from '../Feedback/Notification/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      (100 / (this.state.good + this.state.neutral + this.state.bad)) *
        this.state.good
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedbackGood={this.handleClickGood}
            onLeaveFeedbackNeutral={this.handleClickNeutral}
            onLeaveFeedbackBad={this.handleClickBad}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Feedback;
