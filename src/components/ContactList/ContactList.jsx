import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { Loader } from "components/Loader/Loader";
import css from './ContactList.module.css';

import { ContactListItem } from "./ContactListItem";
import { useEffect } from "react";

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
  <ul className={css.list}>
    {isLoading && <Loader />}
    {error && <div className={css.error}>{error}</div>}
    {filteredContacts.length > 0 &&
                filteredContacts.map(contact =>
                <ContactListItem
                    contact={contact}
                    key={contact.id}
                />
            )}
  </ul>
  );
}


