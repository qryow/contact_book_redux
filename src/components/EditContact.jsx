//import React, { useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import { saveChanges } from '../store/contactSlice';


//const EditContact = () => {
//  const oneContact = useSelector(state => state.todos.oneContact);

//  const [contact, setContact] = useState(oneContact);

//  const dispatch = useDispatch();

//  return (
//    <div>
//      <h3>Edit todo component</h3>
//      <input type="text" onChange={e => setContact({...contact, name: e.target.value })} value={contact.name}/>
//      <input type="number" onChange={e => setContact({...contact, nunmber: e.target.value })} value={contact.number}/>
//      <button onClick={() => dispatch(saveChanges(contact))}>Save</button>
//    </div>
//  )
//}

//export default EditContact