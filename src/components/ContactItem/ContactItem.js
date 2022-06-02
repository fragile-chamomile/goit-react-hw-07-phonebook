import React from 'react';
import PropTypes from 'prop-types';
import { remove } from 'redux/slice';
import { useDispatch } from 'react-redux';
import { Item, Contact, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  // Удаление контакта
  const deleteContactItem = contactItemId => {
    dispatch(remove(contactItemId));
  };

  return (
    <Item>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => deleteContactItem(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
