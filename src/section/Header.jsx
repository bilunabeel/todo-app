import {useState,useEffect} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import auth from '../firebase/firebase';

const Header = ({todo, setTodo, todos, setTodos}) => {
  //state for user registration components
  const [signedIn, setSignedIn] = useState (false);
  const [showSignUp,setShowSignUp]=useState(false)
  const [user,setUser]=useState(null)

  const handleSubmit = e => {
    e.preventDefault ();
    const todoToAdd = {text: todo, checked: false};
    if (todo !== '') {
      setTodos ([...todos, todoToAdd]);
      setTodo ('');
    }
  };

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth,(authUser)=>{
      if(authUser){
        setUser(authUser)
      }else{
        setUser(null)
      }
    })
  
    return () => {
      unsubscribe()
    }
  }, [])
  

  const handleSignOut = async()=>{
    
    try {
      await signOut(auth)
      console.log('signed out');
    } catch (error) {
      console.log('error signing out', error);
    }

  }

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
          :  showSignUp? <SignUp setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={showSignUp} />: <SignIn setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={showSignUp} />}
      {!user && <button onClick={handleSignOut} className="bg-white font-semibold text-sm w-28 max-sm:w-full h-10  rounded-full shadow-md">Sign Out</button>
      } 
      </div>
    </header>
  );
};

export default Header;
