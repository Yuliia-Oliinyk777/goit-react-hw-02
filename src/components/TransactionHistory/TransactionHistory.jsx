import style from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead className={style.head}>
        <tr>
          <th className={style.part}>Type</th>
          <th className={style.part}>Amount</th>
          <th className={style.part}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={style.items} key={item.id}>
            <td className={`${style.item} ${style.title}`}>{item.type}</td>
            <td className={style.item}>{item.amount}</td>
            <td className={style.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
