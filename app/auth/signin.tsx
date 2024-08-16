import React from 'react';
import { auth } from '@/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignIn = () => {

    const signinwithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }


  return (
    <button onClick={signinwithGoogle}>Sign In</button>
  )
}

export default SignIn;