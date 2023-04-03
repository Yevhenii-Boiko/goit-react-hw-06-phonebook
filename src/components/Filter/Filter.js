import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, getFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterChange = evt => dispatch(setFilterValue(evt.target.value));

  return (
    <Label>
      Filter contacts by name
      <Input type="text" value={filterContact} onChange={handleFilterChange} />
    </Label>
  );
};
