import {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import auth from '../firebase/firebase';

const SignUp = ({setShowSignUp, showSignUp}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState (null);

  const handleSignUp = async e => {
    e.preventDefault ();
    try {

          await createUserWithEmailAndPassword (auth, email, password);
          setError (null);
          console.log ();
      
    } catch (error) {
      setError (mapFirebaseErrorMessage(error.code));
      console.log(error.code);
      console.log(error.message);
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
    <div className="w-80% bg-light-yellow rounded-full px-5">
      <form name="signup" onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={e => {
            setEmail (e.target.value);
          
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => {
            setPassword (e.target.value);
          }}
          />

        <button type="submit">Sign Up</button>
          {error && <p>{error}</p>}
      </form>
      <p className="cursor-pointer" onClick={() => setShowSignUp (!showSignUp)}>
        Already have an account?
      </p>
    </div>
  );
};

export default SignUp;
