import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

const SignOut = () => {
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}

export default SignOut
