import { Component } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  onLeaveFeedback = e => {
    const value = e.currentTarget.textContent;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
            test={this.state.good}
          />
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={`${this.countTotalFeedback()}`}
              positivePercentage={`${this.countPositiveFeedbackPercentage()}%`}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
