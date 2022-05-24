import React from 'react';
import { Background, CloseModalOfMenuOptions, ModalContentSentToKitchen, ModalOrderSentWithSucess } from './ModalStyle';

const ModalSucessRegister = ({showModal, setShowModal, children}) => {
    return (
    <>
    {showModal ? (
        <Background>
            <ModalOrderSentWithSucess showModal={showModal}>
            <ModalContentSentToKitchen>
                {children}
            </ModalContentSentToKitchen>
            <CloseModalOfMenuOptions aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalOrderSentWithSucess>
        </Background>

    
    ): null}
        
    </>
    
    )
};

export default ModalSucessRegister;
