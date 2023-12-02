import {useState} from 'react';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import auth from '../firebase/firebase';

const SignUp = ({setUser,setShowSignUp, showSignUp,setSignedIn}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState (null);

  const handleSignUp = async e => {
    e.preventDefault ();
    try {

          const userCredentials = await createUserWithEmailAndPassword (auth, email, password);
          console.log(userCredentials.user);
          setUser (userCredentials.user)
          setSignedIn(true)
          setError (null);
          console.log ();
      
    } catch (error) {
      setError (mapFirebaseErrorMessage(error.code));
      console.log('Error signing up', error);
    }
  };

  const mapFirebaseErrorMessage = (errorCode)=>{
    const errorMessage = {
        'auth/invalid-email': "Enter a Valid Email!",
        'auth/weak-password': 'Password should be atleast 6 characters!',
    }
    return errorMessage[errorCode] || 'There is a problem!'
  }



  return (
    <div>
      <form name="signup" className='flex flex-col gap-4' onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]"
          onChange={e => {
            setEmail (e.target.value);
          
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]"
          onChange={e => {
            setPassword (e.target.value);
          }}
          />
<div className='flex gap-5 items-center'>

        <button type="submit"  className="bg-white font-semibold text-sm w-[50%]  h-10  rounded-full shadow-md">Sign Up</button>
          {error && <p>{error}</p>}
      <p className="cursor-pointer text-white max-sm:text-sm" onClick={() => setShowSignUp (!showSignUp)}>
        Already have an account?
      </p>
</div>
      </form>
    </div>
  );
};

export default SignUp;
