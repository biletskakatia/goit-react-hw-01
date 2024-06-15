import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
    return (
        <table className={css.transactionHistory}>
    <thead className={css.thead}>
        <tr className={css.trHead}>
        <th className={css.thHead}>Type</th>
        <th className={css.thHead}>Amount</th>
        <th className={css.thHead}>Currency</th>
        </tr>
    </thead>
    <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) => (
        <tr className={css.trBody} key={id}>
            <td className={css.tdBody}>{type}</td>
            <td className={css.tdBody}>{amount}</td>
            <td className={css.tdBody}>{currency}</td>
        </tr>
        ))}
    </tbody>
    </table>
    )
}