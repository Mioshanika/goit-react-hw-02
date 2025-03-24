import s from './options.module.css';

export default function Options({ onChange, onReset, total }) {
  return (
    <ul className={s.options}>
      <li>
        <button onClick={() => onChange('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => onChange('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onChange('bad')}>Bad</button>
      </li>
      <li>{Boolean(total) && <button onClick={onReset}>Reset</button>}</li>
    </ul>
  );
}
