import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import css from './App.module.css';


export const App = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: 20,
      color: '#010101',
    }}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
      </div>
  );
}
