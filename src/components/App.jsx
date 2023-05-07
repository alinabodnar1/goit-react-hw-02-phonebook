import { Component } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (contact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      }
    })
  }


  render() {

    return (
      <>
        <Form addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
}
export default App;
