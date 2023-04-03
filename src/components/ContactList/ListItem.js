import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { MdDelete } from 'react-icons/md';
import { Item, ItemWrapper, Text, Button } from './ListItem.styled';

export const ListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <ItemWrapper>
        <Text>{name}:</Text>
        <Text>{number}</Text>

        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          {/* Delete */}
          <MdDelete />
        </Button>
      </ItemWrapper>
    </Item>
  );
};
