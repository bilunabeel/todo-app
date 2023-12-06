import {useState, useEffect} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../firebase/firebase';
import {db} from '../firebase/firebase';
import {AiOutlineLogout} from 'react-icons/ai';

import {collection, addDoc} from 'firebase/firestore';

const Header = ({todo, setTodo, todos, setTodos}) => {
  //state for user registration components
  const [signedIn, setSignedIn] = useState (false);
  const [showSignUp, setShowSignUp] = useState (false);
  const [user, setUser] = useState (null);

  const handleSubmit = async (e) => {
    
    e.preventDefault ();
    const todoToAdd = {text: todo, checked: false};

    if (todo !== '') {
      try {

        const collectionRef = collection (db, 'todos');

        const docRef = await addDoc (collectionRef, {
          text: todo,
          checked: false,
          userId: user.uid,
        });

        console.log ('Document written with ID: ', docRef.id);

        setTodos ([...todos, todoToAdd]);
        setTodo ('');

      } catch (error) {
        console.error ('Error adding Todos!', error);
      }
    }
  };

  useEffect (() => {
    const unsubscribe = onAuthStateChanged (auth, authUser => {
      if (authUser) {
        setUser (authUser);
        setSignedIn (true);
        localStorage.setItem ('user', JSON.stringify (authUser));
        console.log ('header' + signedIn);
        console.log (user);
      } else {
        setUser (null);
        setSignedIn (false);
        localStorage.removeItem ('user');
      }
    });

    const storedUser = localStorage.getItem ('user');
    if (storedUser) {
      setUser (JSON.parse (storedUser));
      setSignedIn (true);
    }

    return () => {
      unsubscribe ();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut (auth);
      console.log ('signed out');
    } catch (error) {
      console.log ('error signing out', error);
    }
  };

  return (
    <header
      id="header"
      className="font-poppins bg-dark-green pt-[100px] pb-[40px] flex justify-center"
    >
      <div className="w-[450px] max-sm:padding-x">
        <h1 className="text-white font-semibold text-3xl left-0 mb-2">
          Todo<span className="font-extralight">App</span>
        </h1>
        {signedIn
          ? <form
              onSubmit={handleSubmit}
              className="flex gap-4 max-sm:flex-col"
            >
              <input
                type="text"
                value={todo}
                onChange={e => setTodo (e.target.value)}
                placeholder="Eg: Read Books"
                className="bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10 w-[80%] max-sm:w-[100%]"
              />

              <button
                type="submit"
                className="bg-white font-semibold text-sm w-28 max-sm:w-full h-10  rounded-full shadow-md"
              >
                Add Task
              </button>

            </form>
          : showSignUp
              ? <SignUp
                  setUser={setUser}
                  setShowSignUp={setShowSignUp}
                  showSignUp={showSignUp}
                  setSignedIn={setSignedIn}
                />
              : <SignIn
                  setUser={setUser}
                  setShowSignUp={setShowSignUp}
                  showSignUp={showSignUp}
                  setSignedIn={setSignedIn}
                  signedIn={signedIn}
                />}
        {user &&
          <div onClick={handleSignOut}>
            <button className="absolute top-5 right-5 bg-yellow-green font-semibold text-sm w-28 max-sm:w-full h-10 max-sm:hidden rounded-full shadow-md">
              Sign Out
            </button>
            <div className="absolute top-5 right-5 sm:hidden bg-yellow-green rounded-full h-10 w-10 flex justify-center items-center">

              <AiOutlineLogout className="" />
            </div>
          </div>}
      </div>
    </header>
  );
};

export default Header;
