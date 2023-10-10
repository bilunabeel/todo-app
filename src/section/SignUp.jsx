import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../firebase/firebase"

const SignUp = ({setShowSignUp,showSignUp}) => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)

    const handleSignUp = async(e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            console.log('Signed Up Successfully');
        }catch(error){
console.log('Error Signing Up: ',error);
        }
    }
  return (
    <div className='w-80% bg-light-yellow rounded-full px-5'>
        <form onSubmit={handleSignUp}>
            <input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit" >Sign Up</button>
        </form>
        <p onClick={()=>setShowSignUp(!showSignUp)} >Already have an account?</p>
    </div>
  )
}

export default SignUp