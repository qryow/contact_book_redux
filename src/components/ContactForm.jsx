import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../store/contactSlice'

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const dispatch = useDispatch()

  function createContact() {
    if(!contactName.trim() || !contactNumber.trim()) 
    return alert('Input is empty!')

    let newContact = {
      id: Date.now(),
      name: contactName,
      number: contactNumber,
    };

    dispatch(addContact(newContact));

    setContactName('');
    setContactNumber('')
  }

  return (
    <div>
      <h3>Create contact</h3>
      <input type="text" onChange={e => setContactName(e.target.value)} value={contactName} />
      <input type="number" onChange={e => setContactNumber(e.target.value)} value={contactNumber} />
      <button onClick={createContact}>Create</button>
    </div>
  )
}


export default ContactForm