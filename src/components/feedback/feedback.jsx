import { FeedbackOptions } from 'components/feedback-options/feedback-options';
import { Section } from 'components/section/section';
import { Statistics } from 'components/statistics/statistics';
import React, { Component } from 'react';
import { Container } from './feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let persentage = 0;
    console.log(this.state.good);
    if (this.state.good > 0) {
      persentage = Math.round(
        (this.state.good * 100) / this.countTotalFeedback()
      );
    }
    return persentage;
  };

  handleCounter = evt => {
    let key = evt.target.name;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const state = this.state;

    return (
      <Container>
        <Section title="Please leave feedback" />
        <FeedbackOptions options={state} onLeaveFeedback={this.handleCounter} />

        <Section title="Statistics" />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}
