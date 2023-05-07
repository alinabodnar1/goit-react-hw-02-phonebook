import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

export default function ContactsList({contacts, onDelete}) {
  return (<ul>
            { contacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </ul>
  )
}
