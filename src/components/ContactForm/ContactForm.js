import { useState } from 'react';
import {
  contactsApi,
  useCreateContactMutation,
} from '../../services/contacts-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Label, Input, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();
  const contactState = contactsApi.endpoints.getContacts.useQueryState().data;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        return;
    }
  };

  // Добавление контакта, проверка на повторение имени
  const handleSubmit = async e => {
    e.preventDefault();

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const dublicateName = contactState.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (dublicateName) {
      setName('');
      setNumber('');
      return alert(`${contact.name} is already in contacts.`);
    }

    createContact(contact);
    toast.success('You added a new contact!', { theme: 'colored' });

    setName('');
    setNumber('');
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            style={{ marginLeft: '35px' }}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
