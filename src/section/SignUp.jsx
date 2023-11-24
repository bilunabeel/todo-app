import {useState} from 'react';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import auth from '../firebase/firebase';

const SignUp = ({setUser,setShowSignUp, showSignUp}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState (null);

  const handleSignUp = async e => {
    e.preventDefault ();
    try {

          const userCredentials = await createUserWithEmailAndPassword (auth, email, password);
          console.log(userCredentials.user);
          setUser (userCredentials.user)
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
