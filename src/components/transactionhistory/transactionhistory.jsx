import thCss from './transactionhistory.module.css';

export default function TransactionHistory({ items }) {
  const tableRows = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={thCss.transactions}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
