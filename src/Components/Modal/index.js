import React from 'react'
import { Modal } from 'react-bootstrap'
import Buttons from '../Button'

export default function CustModal({showModal,setShowModal,children,btnValue,RequestFunction,title}) {
    return (
        <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
        >
            <Modal.Header><h3>{title}</h3></Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Buttons value={btnValue} onClickFunction={RequestFunction} />
            </Modal.Footer>
        </Modal>
    )
}
