import React from 'react';
import { nanoid } from "nanoid";
import Button from '@mui/material/Button';


export default function ContactsList({contacts}) {
  return (
    <>
        <h1>Contacts</h1>
            <ul>
                { contacts.map(contact => (
                    <li key={nanoid()}>
                        {contact.name} {' '}
                        {contact.number} {' '}
                        <Button variant="outlined">
                            DELETE
                        </Button>
                    </li>
                ))}
            </ul>
    </>
  )
}
