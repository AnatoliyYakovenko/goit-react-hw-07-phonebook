import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({
  contact: { id, name, phone },
}) => {
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
      dispatch(deleteContact(id));
  }
  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}
        <span className={css.numberSpan}>{phone}</span>
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
