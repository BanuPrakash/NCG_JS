import React from 'react'

export default function ContactView({contact, remove}) {
  return (
    <div>
        {contact.name}, {contact.email} 
        <button type='button' onClick={() => remove(contact.email)}>&times;</button>
    </div>
  )
}
