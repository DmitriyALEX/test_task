import { useState } from 'react'
import styles from './styles.module.css'
import AuthForm from '../Auth'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import SignOut from '../Auth/SignOut'

const Header = () => {
    const [openLoginForm, setOpenLoginForm] = useState<boolean>(false)

    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const user = useAuth()
    return (
        <header className={isHomePage ? `${styles.header_homepage}` : `${styles.header_container}`}>
            <div className={styles.header_logo}>LOGO</div>
            <nav className={styles.header_navigation}>
                <ul className={styles.header_navigation_list}>
                    <li>
                        <Link to={'/'} className={styles.navigation_item}>
                            HOME
                        </Link>
                    </li>
                    <li>ABOUT</li>
                    <li>QA</li>
                    <li>CONTACT FORM</li>
                    <li>
                        <Link to={'/saved'} className={styles.navigation_item}>
                            SAVED
                        </Link>
                    </li>
                </ul>
            </nav>

            {user && <>{user.email}</>}
            {user ? (
                <SignOut />
            ) : (
                <button
                    className={isHomePage ? `${styles.header_logIn_homepage}` : `${styles.header_logIn}`}
                    onClick={() => setOpenLoginForm(true)}
                >
                    LOG IN
                </button>
            )}

            {openLoginForm && <AuthForm openLoginForm={openLoginForm} setOpenLoginForm={setOpenLoginForm} />}
        </header>
    )
}

export default Header
