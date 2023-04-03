import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List } from './ContactList.styled';
import { ListItem } from './ListItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
