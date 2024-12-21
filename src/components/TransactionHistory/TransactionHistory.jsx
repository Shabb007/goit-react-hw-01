import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <>
      <table className={css.trTable}>
        <thead className={css.trTableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr className={css.trTableRow} key={id}>
                <td className={css.trTableColumn}>{type}</td>
                <td className={css.trTableColumn}>{amount}</td>
                <td className={css.trTableColumn}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
