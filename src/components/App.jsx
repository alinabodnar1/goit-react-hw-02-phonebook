import React, { Component } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

 addContact = contact => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      }
    })
  }
  
  handleChange = e => {
    this.setState({
      filter: e.target.value,
    });
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    });
  }

 deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
 }
  //---------------------------------------------------------------
  render() {
    return (
      <div style={{marginLeft: "20px"}}>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
       
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.handleChange} />
        <ContactsList
          contacts={this.filterContacts()}
          onDelete={this.deleteContact} />
      </div>
    );
  }
}

