import React from 'react'
import { getAuth } from 'firebase/auth'
import { firestore }  from '@/firebaseConfig'


const SignOut = () => {

    const auth = getAuth(firestore.app);

    return auth.currentUser && (
        <div>
            SignOut

        <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut