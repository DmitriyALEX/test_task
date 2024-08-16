import React, { useState } from 'react'
import styles from './styles.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

interface ISignIn {
    setOpenLoginForm: (value: boolean) => void
}

const SignIn = ({ setOpenLoginForm }: ISignIn) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [warning, setWarning] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user)
                setEmail('')
                setPassword('')
                setWarning(false)
                setOpenLoginForm(false)
            })
            .catch(error => {
                console.error(error)
                setWarning(true)
            })
    }
    return (
        <div className={styles.auth_mode_container}>
            <h2 className={styles.title}>Sign in</h2>
            {warning && <p style={{ color: 'red', textAlign: 'center' }}> User not found</p>}
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <div className={styles.form_content}>
                    <label htmlFor="email" className={styles.input_label}>
                        Email
                    </label>
                    <input id="email" type="email" onChange={e => setEmail(e.target.value)} />

                    <label htmlFor="password" className={styles.input_label}>
                        Password
                    </label>
                    <input id="password" type="password" onChange={e => setPassword(e.target.value)} />

                    <button className={styles.submit_button} onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
