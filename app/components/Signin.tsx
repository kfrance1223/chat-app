import React from 'react';
import firebase from '@/firebaseConfig';
import { auth } from '@/firebaseConfig';



const SignIn = () => {

    const signinwithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }


  return (
    <button onClick={signinwithGoogle}>Sign In</button>
  )
}

export default SignIn