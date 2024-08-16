import React, { useState } from 'react'
import ModalWindow from '../../shared/ModalWindow'
import SignIn from './SignIn'
import SignUp from './SignUp'
import styles from './styles.module.css'

interface ILoginForm {
    openLoginForm: boolean
    setOpenLoginForm: (value: boolean) => void
}

const AuthForm: React.FC<ILoginForm> = ({ openLoginForm, setOpenLoginForm }) => {
    const [authMode, setAuthMode] = useState<string>('signup')

    return (
        <ModalWindow openModalWindow={openLoginForm} setOpenModalWindow={setOpenLoginForm}>
            <div className={styles.auth_mode_container}>
                <div className={styles.auth_mode_buttons_container}>
                    <button className={styles.auth_mode_button} onClick={() => setAuthMode('signup')}>
                        Sign up
                    </button>
                    <button className={styles.auth_mode_button} onClick={() => setAuthMode('signin')}>
                        Sign in
                    </button>
                </div>
                {authMode === 'signup' ? (
                    <SignUp setOpenLoginForm={setOpenLoginForm} />
                ) : (
                    <SignIn setOpenLoginForm={setOpenLoginForm} />
                )}
            </div>
        </ModalWindow>
    )
}

export default AuthForm
