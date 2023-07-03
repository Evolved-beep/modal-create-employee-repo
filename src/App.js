import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
    const [openModal, setOpenModal] = useState(true)
    return (
        openModal && <Modal closeModal={setOpenModal} />
    )
  
}

export default App;
