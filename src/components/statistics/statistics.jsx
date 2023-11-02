import { Notification } from 'components/notification/notification';
import { Info } from './statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (!good && !neutral && !bad) {
    return <Notification message="There is no feedback" />;
  } else {
    return (
      <div>
        <Info>Good: {good}</Info>
        <Info>Neutral: {neutral}</Info>
        <Info>Bad: {bad}</Info>
        <Info>Total: {total}</Info>
        <Info>Positive feedback: {positivePercentage}%</Info>
      </div>
    );
  }
};
