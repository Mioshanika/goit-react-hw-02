import s from './feedback.module.css';
import clsx from 'clsx';

export default function Feedback({ numbers, total }) {
  const { good, neutral, bad } = numbers;
  const positive = total ? Math.round(((good + neutral) / total) * 100) : 0;
  const isGood = positive >= 50 ? true : false;
  const isBad = positive < 50 ? true : false;
  return (
    <>
      <table className={s.feedback}>
        <thead>
          <tr>
            <th>Good</th>
            <th>Neutral</th>
            <th>Bad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{good}</td>
            <td>{neutral}</td>
            <td>{bad}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <div className={clsx(s.percents, isGood && s.positive, isBad && s.negative)}>
        Positive: {positive}%
      </div>
    </>
  );
}
