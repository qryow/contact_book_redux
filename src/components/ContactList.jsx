import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  console.log(contacts);

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <Link to={`/contacts/${contact.id}`} key={contact.id}>
            <ContactItem contact={contact} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
