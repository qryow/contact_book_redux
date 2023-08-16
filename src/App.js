import React from 'react'
import MainRoutes from './MainRoutes'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Navbar from './components/Navbar'
//import { useSelector } from 'react-redux'

const App = () => {
  return (
    <>
      <Navbar />
      {/*<ContactForm /> */}
      <MainRoutes />
      {/*<ContactList />*/}
    </>
  )
}

export default App
