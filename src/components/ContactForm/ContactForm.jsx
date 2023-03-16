import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { toast } from 'react-toastify';
import css from './ContactForm.module.css';
import { getContacts } from "redux/selectors";

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(getContacts);
  const contactsNames = items.map(contact => contact.name);
  const dispatch = useDispatch();


  const handleChange = e => {
    const { name, value } = e.target;
    switch (name){
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
        default:
          return;
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
  };

  if(contactsNames.includes(name)) {
      toast.error(`${name} is already in contacts.`);
      return;
  } else {
      dispatch(addContact(newContact));
  }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

    return (
      <form
        className={css.form}
        onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={css.inputName}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={css.inputNumber}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.buttonEditor}>
          Add contact
        </button>
      </form>
    );
}
