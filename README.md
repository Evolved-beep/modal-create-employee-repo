## Installation
> npm i modal-success-employe

## Dependency
> npm install to get all the dependency


## File that you use the modal 
```js
function App() {
    const [openModal, setOpenModal] = useState(true)
    return (
        openModal && <Modal closeModal={setOpenModal} />
    )
  
}

export default App;
```

## Modal component 
```js
const Modal = ({closeModal}) => {
    return(
        <div className={closeModal ? "modal_container" : "modal_display"}>
            <div className="modal_test">
                <p>Employee created</p>
                <div className="close_container">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    )

}

export default Modal
```

## Some CSS style 
```css
.modal_container {
    position: fixed;
    background-color: rgba(0,0,0,0.75);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal_display {
    display: none;
}

.modal_test {
    position: relative;
    max-width: 850px;
    width: 100%;
    padding: 10px 30px;
    background: white;
    border-radius: 5px;
}

.modal_test p {
    text-align: left;
}

.close_container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgb(0,0,0);
    top: -20%;
    right: -1%;
}
```
