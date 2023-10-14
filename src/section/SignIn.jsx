import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import auth from '../firebase/firebase';
import {Link} from 'react-router-dom';

const SignIn = ({setShowSignUp, showSignUp}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error,setError]=useState(null)


  const handleSignIn = async e => {
    e.preventDefault ();
    try {
        await signInWithEmailAndPassword (auth, email, password);
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
    <div className="w-80% bg-light-yellow rounded-full px-5">
      <form name="signin" onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail (e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => {
            setPassword (e.target.value);
        }}
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
      <p className="cursor-pointer" onClick={() => setShowSignUp (!showSignUp)}>
        Don't have an account?
      </p>
    </div>
  );
};

export default SignIn;
