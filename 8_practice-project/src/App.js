import { useState } from 'react';
import AppContainer from './components/Utility/AppContainer';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';
import Flex from './components/Utility/Flex';
import Modal from './components/UI/Modal';

const App = () => {
  const [userArray, setUserArray] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const addUser = (username, age) => {
    setUserArray((prevState) => {
      return [...prevState, {username: username, age: age}];
    })
  }

  const toggleModal = () => {
    modalActive ? setModalActive(false) : setModalActive(true);
  }

  const showModal = (message) => {
    setModalMessage(message);
    toggleModal(true);
  }

  const deleteUser = (index) => {
    setUserArray((prevState) => {
      return prevState.filter((currentUser, i) => i !== index);
    })
  }

  return (
    <AppContainer>
      <Flex direction="column" alignItems="center">
        <Form addUser={addUser} showError={showModal}/>
        {userArray.length > 0 &&
          <UserList userArray={userArray} deleteUser={deleteUser}/>
        }
      </Flex>
      {modalActive && 
        <Modal closeModal={toggleModal} message={modalMessage}/>
      }
    </AppContainer>
  );
}

export default App;
