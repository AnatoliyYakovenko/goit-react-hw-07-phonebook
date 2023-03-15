import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}
        <span className={css.numberSpan}>{number}</span>
      </p>
      <button
        type="button"
        className={css.btn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
