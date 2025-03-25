// Css
import s from './app.module.css';
// React objects
import { useState, useEffect } from 'react';
// Components
import Description from '../description/description.jsx';
import Options from '../options/options.jsx';
import Notification from '../notification/notification.jsx';
import Feedback from '../feedback/feedback.jsx';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedbacks');
    if (savedFeedback !== null) return JSON.parse(savedFeedback);
    return { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacks = totalFeedbacks
    ? Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedbacks) * 100)
    : 0;

  const updateFeedbacks = feedbackType => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };
  const resetFeedbacks = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div className={s.app_container}>
      <Description />
      <Options onChange={updateFeedbacks} onReset={resetFeedbacks} total={totalFeedbacks} />
      {Boolean(totalFeedbacks) ? (
        <Feedback numbers={feedbacks} total={totalFeedbacks} positive={positiveFeedbacks} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
