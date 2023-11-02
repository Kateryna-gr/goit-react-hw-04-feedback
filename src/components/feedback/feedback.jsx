import { FeedbackOptions } from 'components/feedback-options/feedback-options';
import { Section } from 'components/section/section';
import { Statistics } from 'components/statistics/statistics';
import React from 'react';
import { Container } from './feedback.styled';
import { useState } from 'react';

export const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let persentage = 0;
    if (state.good > 0) {
      persentage = Math.round((state.good * 100) / countTotalFeedback());
    }
    return persentage;
  };

  const handleCounter = evt => {
    let key = evt.target.name;

    setState(prevState => ({ ...prevState, [key]: prevState[key] + 1 }));
  };

  return (
    <Container>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={state} onLeaveFeedback={handleCounter} />

      <Section title="Statistics" />
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Container>
  );
};
