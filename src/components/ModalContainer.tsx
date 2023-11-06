import { useState } from 'react';
import './ModalContainer.css';

function ModalContainer ({ addModal, modals, removeModal }: any) {
    const [lastClosingModal, setLastClosingModal] = useState(undefined)

    const topModal = modals[modals.length - 1]

    const active = modals.length
    let modalContents = <></>
    if (active) {
        modalContents = <p>{ topModal.toString() }</p>
    }

    function removeModalWrapper (...args: any) {
        removeModal(...args)
        setLastClosingModal(topModal)
    }

    function onTransitionEnd () {
        setLastClosingModal(undefined)
    }

    let stateClassName
    if (!topModal && !lastClosingModal) {
        stateClassName = 'dormant'
    } else if (!topModal && lastClosingModal) {
        stateClassName = 'closing'
    }

    return (
        <div className={`modal-container ${stateClassName}`}>
            <div className="modal" onTransitionEnd={ onTransitionEnd }>
                <p>{ modalContents }</p>

                <form onSubmit={ addModal }>
                    <button>Add Modal</button>
                </form>

                <form onSubmit={removeModalWrapper }>
                    <button>Remove Modal</button>
                </form>
            </div>
        </div>
    );
}

export default ModalContainer;
