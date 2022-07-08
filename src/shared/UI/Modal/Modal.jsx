import React, { useState } from 'react'
import styles from './Modal.scss'

const Modal = ({children, ...props}) => {
    const [isModal, setModal] = useState();

    if (!props.openModal) {
        return null;
    }
    return (
        <div className={[
            styles.modal,
            props.openModal ? styles.isAicive : null].join(' ')}>
            <div className={styles.modalContent}>
                <button onClick={() => {props.close(false)}} className={styles.modalCLoseBtn}>
                    <span></span><span></span>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal