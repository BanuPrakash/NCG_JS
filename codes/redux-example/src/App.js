import './App.css';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import { useRef } from 'react';

function App(props) {

  let emailRef = useRef();
  let nameRef = useRef();

  function newContact() {
    let contact = {
      email: emailRef.current.value,
      name: nameRef.current.value
    };
    props.addContact(contact);
    emailRef.current.value = "";
    nameRef.current.value = "";
  }

  return (
    <div>
      <h1>Welcome {props.name} </h1>
      <button onClick={() => props.clearContacts()}>Clear All</button>
      <form>
        Email : <input type="email" ref={emailRef}/> <br />
        Name : <input type="text" ref={nameRef} /> <br />
        <button type="button" onClick={newContact}> Add Contact</button>
      </form>
      {
        props.contactList.map(contact => <ContactView 
          remove={(email) => props.removeContact(email)}
          contact={contact} key={contact.email} />)
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contactList: state.contacts,
    profilePic: state.profile.avatar,
    name: state.profile.displayName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearContacts: () => dispatch({type:'CLEAR_CONTACTS'}),
    addContact: contact => dispatch({type:'ADD_CONTACT', payload: contact}),
    removeContact: email => dispatch({type:'REMOVE_CONTACT', payload: email})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
