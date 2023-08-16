import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactList from './components/ContactList'
//import ContactItem from './components/ContactItem'
import ContactsDetails from './components/ContactsDetails'
import ContactForm from './components/ContactForm'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ContactForm />}/>
      <Route path='/contacts' element={<ContactList />}/>
      <Route path='/contacts/:id' element={<ContactsDetails />}/>
    </Routes>
  )
}

export default MainRoutes