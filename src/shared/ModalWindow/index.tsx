import React, { useEffect } from 'react'
import styles from './styles.module.css'
import closeIcon from '../../../public/icons/closeIcon.svg'

interface IModalWindow {
    children: React.ReactNode
    openModalWindow: boolean
    setOpenModalWindow: (value: boolean) => void
}

const ModalWindow: React.FC<IModalWindow> = ({ children, openModalWindow, setOpenModalWindow }) => {
    useEffect(() => {
        if (openModalWindow) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [openModalWindow])

    return (
        <section className={styles.modal_window_wrapper}>
            <div className={styles.modal_window}>
                <div className={styles.close_button_container}>
                    <button className={styles.close_button} onClick={() => setOpenModalWindow(!openModalWindow)}>
                        <img src={closeIcon} alt={'closeIcon'} />
                    </button>
                </div>
                {children}
            </div>
        </section>
    )
}

export default ModalWindow
