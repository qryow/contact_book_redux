import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ContactItem from './ContactItem';
import { useDispatch } from 'react-redux'
import { deleteContact } from '../store/contactSlice';
import { Link } from 'react-router-dom';
//import EditContact from './EditContact';

const ContactDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Получаем айди из параметров маршрута
  const contacts = useSelector(state => state.contacts.contacts);
  const contact = contacts.find(contact => contact.id === parseInt(id)); // Находим контакт по айди

  return (
    <>
      {contact ? (
        <>
          <ContactItem contact={contact} />
        <Link to="/contacts">
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
            {/*<button onClick={() => dispatch(getOneContact(contact.id))}>Edit</button>*/}
        </Link>
          {/*<EditContact />*/}
        </>
      ) : (
        <h1>Contact not found</h1>
      )}
    </>
  );
}

export default ContactDetails;