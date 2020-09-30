import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal';
import { CustomModalContainer, CloseButton } from './styles'
import { FiX } from 'react-icons/fi'

const CustomModal = ({ isOpen, onRequestClose, contentLabel, product }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFF',
            boxShadow: '0px 0px 15px rgba(17, 34, 76, 0.15)',
            borderRadius: '8px',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, .4)'
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel={contentLabel}
        >
            <CloseButton onClick={onRequestClose}>
                <FiX size={24} />
            </CloseButton>

            <CustomModalContainer>
                {product && (
                    <>
                        <p className="main-content"><strong>Descrição: </strong>{product.descricao}</p>
                        <p className="main-content"><strong>Descrição: </strong>{product.marca}</p>
                    </>
                )}
            </CustomModalContainer>
        </Modal>
    )
}

CustomModal.propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
}

CustomModal.defaultProps = {
    contentLabel: 'Methodos Tecnologia - Anúncio',
}


export { CustomModal }