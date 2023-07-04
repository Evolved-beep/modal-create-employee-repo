import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
    // This const will change the state of the modal 
    const [openModal, setOpenModal] = useState(true)
    return (
        // We send the setter on the modal component for changed the state when you will close the modal
        openModal && <Modal closeModal={setOpenModal} />
    )
  
}

export default App;
