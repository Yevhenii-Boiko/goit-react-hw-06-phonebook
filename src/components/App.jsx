import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from 'GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, SectionTitle } from './Title/Titles.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Layout>
  );
};
