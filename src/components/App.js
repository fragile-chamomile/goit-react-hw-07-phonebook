import { Container, HeroTitle } from './App.styled';
import { RiContactsBookLine } from 'react-icons/ri';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

function App() {
  return (
    <Container>
      <HeroTitle>
        Phonebook <RiContactsBookLine />
      </HeroTitle>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
