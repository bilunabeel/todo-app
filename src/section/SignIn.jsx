import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import auth from '../firebase/firebase';
import {Link} from 'react-router-dom';

const SignIn = ({setUser,setShowSignUp, showSignUp,setSignedIn,signedIn}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error,setError]=useState(null)


  const handleSignIn = async e => {
    e.preventDefault ();
    try {
        const userCredentials = await signInWithEmailAndPassword (auth, email, password);
        setUser(userCredentials.user)
        setSignedIn(true)
        console.log('sign in'+signedIn);
        console.log ('Successfully Signed In');
      setError(null)
    } catch (error) {
      console.log ('Error signing in: ', error);
      console.log(error.message);
      setError(mapFirebaseErrorMessage(error.code))
    }
  };

  const mapFirebaseErrorMessage = (errorCode)=>{
    const errorMessage = {
        'auth/invalid-email': "Invalid Email!",
        'auth/invalid-login-credentials': 'Incorrect Password!',
        'auth/user-not-found': 'User not found, Please check your Email!'
    }
    return errorMessage[errorCode] || 'There is an problem'
  }


  return (
    <div >
      <form name="signin" className='flex flex-col gap-4' onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          className="bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]"
          value={email}
          onChange={e => {
            setEmail (e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10  max-sm:w-[100%]"
          value={password}
          onChange={e => {
            setPassword (e.target.value);
        }}
        />
        <div className='flex gap-5 items-center'>

        <button type="submit"  className="bg-white font-semibold text-sm w-[50%] h-10  rounded-full shadow-md">Sign In</button>
      {error && <p>{error}</p>}
      <p className="cursor-pointer text-white max-sm:text-sm" onClick={() => setShowSignUp (!showSignUp)}>
        Don't have an account?
      </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
