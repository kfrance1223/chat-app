import React, { useState } from 'react'
import SignIn from '@/app/auth/signin'
import SignOut from '@/app/auth/signout'
import { useRouter } from 'next/navigation'
import auth from '@/firebaseConfig';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
    const [error, setError] = useState(null);
    const router  = useRouter();
    const provider = new GoogleAuthProvider();

const handleGoogleSignIn = async () => {
    setError(null);

    try {
        await auth.signInWithPopup(provider);
        router.push('/chat');
    }
    catch (error) {
        setError(error.message);
}

  return (
    <div>LoginPage</div>
  )
}
}
export default LoginPage