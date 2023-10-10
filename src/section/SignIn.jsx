import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../firebase/firebase'
import { Link } from 'react-router-dom'


const SignIn = ({setShowSignUp,showSignUp}) => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSignIn = async(e)=>{
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth,email,password)
            console.log('Successfully Signed In');
        } catch (error) {
            console.log('Error signing in: ',error);
        }
    }
  return (
    <div className='w-80% bg-light-yellow rounded-full px-5'>
        <form onSubmit={handleSignIn}>
            <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Sign In</button>
        </form>
            <p onClick={()=>setShowSignUp(!showSignUp)} >Don't have an account?</p>
        </div>
  )
}

export default SignIn