import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../services/contacts-api';
import { Item, Contact, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <Contact>
        {name}: {number}
      </Contact>
      <Button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
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
