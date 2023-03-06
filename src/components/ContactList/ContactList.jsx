import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredOutContacts = getContactsData();

  function getContactsData() {
    const standarValue = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(standarValue)
    );
  }

  return (
    <ul className={css.contacts}>
      {filteredOutContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
