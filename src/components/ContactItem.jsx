import React from 'react'

const ContactItem = ({ contact }) => {
  if (!contact) {
    return null; // Добавляем проверку на существование контакта
  }

  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </li>
  )
}

export default ContactItem