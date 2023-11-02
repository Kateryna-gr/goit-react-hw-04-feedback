import { Container, Button } from './feedback-options.styled';

export const FeedbackOptions = props => {
  return (
    <Container>
      <Button type="button" name="good" onClick={props.onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={props.onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={props.onLeaveFeedback}>
        Bad
      </Button>
    </Container>
  );
};
