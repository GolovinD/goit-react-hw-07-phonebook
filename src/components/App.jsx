import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contact">
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </Section>
    </div>
  );
}

export default App;
