import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../config/firebase'

export const useAuth = () => {
    const [isAuthUser, setIsAuthUser] = useState<User | null>(null)
    useEffect(() => {
        const isAuth = onAuthStateChanged(auth, user => {
            if (user) {
                setIsAuthUser(user)
            } else {
                setIsAuthUser(null)
            }
        })
        return () => isAuth()
    }, [])

    return isAuthUser
}
