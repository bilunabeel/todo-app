import {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import auth from '../firebase/firebase';

const SignUp = ({setShowSignUp, showSignUp}) => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [emailValid, setEmailValid] = useState (true);
  const [passwordValid, setPasswordValid] = useState (true);
  const [error, setError] = useState (null);

  const handleSignUp = async e => {
    e.preventDefault ();
    try {
      if (emailValid && passwordValid) {
        await createUserWithEmailAndPassword (auth, email, password);
        setError (null);
        console.log ('Signed Up Successfully');
      }
    } catch (error) {
      setError (error.message);
      console.log ('Error Signing Up: ', error);
    }
  };

  const validateEmail = value => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (value);
    setEmailValid (isValid);
  };

  const validatePassword = value => {
    const isValid = value.length >= 8;
    setPasswordValid (isValid);
  };

  return (
    <div className="w-80% bg-light-yellow rounded-full px-5">
      <form name="signup" onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={e => {
            setEmail (e.target.value);
            validateEmail (e.target.value);
          }}
        />
        {!emailValid && <p>Please, Enter valid Email!</p>}
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={e => {
            setPassword (e.target.value);
            validatePassword (e.target.value);
          }}
        />
        {!passwordValid && <p>Password must be atleast 8 characters!</p>}

        <button type="submit">Sign Up</button>
      </form>
      <p className="cursor-pointer" onClick={() => setShowSignUp (!showSignUp)}>
        Already have an account?
      </p>
    </div>
  );
};

export default SignUp;
