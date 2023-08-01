import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableH,
  TableD,
  TableBody,
  TableRow,
} from './transactionHistory.styled';

const createTableRows = items => {
  return items.map(({ id, type, amount, currency }) => {
    return (
      <TableRow key={id}>
        <TableD>{type}</TableD>
        <TableD>{amount}</TableD>
        <TableD>{currency}</TableD>
      </TableRow>
    );
  });
};

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableH>Type</TableH>
          <TableH>Amount</TableH>
          <TableH>Currency</TableH>
        </tr>
      </TableHead>

      <TableBody>{createTableRows(items)}</TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
