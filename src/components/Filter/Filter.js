import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/slice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filterSelector = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(filter(e.target.value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterSelector} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
