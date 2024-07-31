import React from 'react'
import firebase from '@/firebaseConfig';
import auth from '@/firebaseConfig'
import { getAuth } from 'firebase/auth'


const SignOut = () => {

    const auth = getAuth(firebase.app());

    return auth.currentUser && (
        <div>
            SignOut

        <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut