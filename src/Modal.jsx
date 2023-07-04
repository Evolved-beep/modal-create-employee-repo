import React from "react";
import './Modal.css'

const Modal = ({closeModal}) => {
    return(
        // ternaire condition for show the modal or not by switching the css class
        <div className={closeModal ? "modal_container" : "modal_display"}>
            <div className="modal_test">
                <p>Employee created</p>
                {/* the onClick even will change the modal state to false and remove the modal from the html */}
                <div className="close_container">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    )

}

export default Modal
