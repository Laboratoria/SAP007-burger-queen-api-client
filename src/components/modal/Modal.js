import React from 'react';
import { Background, CloseModalButton, ModalContent, ModalWrapper } from './ModalStyle';

const Modal = ({showModal, setShowModal, children}) => {
    return (
    <>
    {showModal ? (
        <Background>
            <ModalWrapper showModal={showModal}>
            <ModalContent>
                {children}
            </ModalContent>
            <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
        </Background>

    
    ): null}
        
    </>
    
    )
};

export default Modal
