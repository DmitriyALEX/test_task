import React, { useState } from 'react'
import styles from './styles.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

interface ISignUp {
    setOpenLoginForm: (value: boolean) => void
}

const SignUp = ({ setOpenLoginForm }: ISignUp) => {
    // TODO: set username in to database
    // const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmedPassword, setConfirmedPassword] = useState<string>('')

    const [warning, setWarning] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmedPassword) {
            setWarning(true)
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user.user.email)
                // setName('')
                setEmail('')
                setPassword('')
                setConfirmedPassword('')
                setWarning(false)
                setOpenLoginForm(false)
            })
            .catch(error => {
                console.error(error)
                setError(error)
                setOpenLoginForm(true)
            })
    }

    return (
        <div className={styles.auth_mode_container}>
            <h2 className={styles.title}>Create account</h2>
            {warning && <p style={{ color: 'red' }}>Check your password!</p>}
            {error && <p>{error}</p>}
            <form className={styles.form_container}>
                <div className={styles.form_content}>
                    {/* TODO: set username in to database */}
                    {/* <label htmlFor="">Name</label>
                    <input id="name" type="text" onChange={e => setName(e.target.value)} /> */}

                    <label htmlFor="email" className={styles.input_label}>
                        Email
                    </label>
                    <input id="email" type="email" onChange={e => setEmail(e.target.value)} value={email} />

                    <label htmlFor="password" className={styles.input_label}>
                        Password
                    </label>
                    <input id="password" type="password" onChange={e => setPassword(e.target.value)} value={password} />

                    <label htmlFor="confirm password" className={styles.input_label}>
                        Confirm password
                    </label>
                    <input
                        id="confirm password"
                        type="password"
                        onChange={e => setConfirmedPassword(e.target.value)}
                        value={confirmedPassword}
                    />

                    <button className={styles.submit_button} onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
