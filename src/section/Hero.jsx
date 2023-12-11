// import { icon } from "@fortawesome/fontawesome-svg-core"
import {faCircle, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useState} from 'react';
import {collection, doc, getDocs, updateDoc,deleteDoc} from 'firebase/firestore';
import {db} from '../firebase/firebase';

const Hero = ({todos, setTodos}) => {
  const [did, setDid] = useState ([]);
  const [remaining, setRemaining] = useState ([]);

  //checking todo after done
  const checkToggle = async (index, value) => {
    try {
      const todosArray = [...todos];
      todosArray[index].checked = value;
      setTodos (todosArray);

      const updated = doc (db, 'todos', todosArray[index].id);
       await updateDoc (updated, {checked: value});
    } catch (error) {
      console.error ('Error checking Todo!',error);
    }
  };

  //editing todo
  const editTodo = async(index, newText) => {
    try {
      const todoArray = [...todos]
      todoArray[index].text = newText
      setTodos(todoArray)

      const updated = doc(db,'todos',todoArray[index].id)
      await updateDoc(updated,{text:newText})
    } catch (error) {
      console.error('Error in editing Todo!',error)
    }
  };

  //removing todo
  const removeTodo = async(indexToRemove) => {
    try {
      const todoArray = [...todos]
      const filtered =todoArray.filter((todo,index)=>index !== indexToRemove)
      setTodos(filtered)

      const removeRef = doc(db,'todos',todoArray[indexToRemove].id)
      await deleteDoc(removeRef)

    } catch (error) {
      console.error("Error in removing Todo!",error);
    }
    
  };

  //fetching todos from firestore collection
  useEffect (
    () => {
      const getTodosFromStore = async () => {
        try {
          const querySnapshot = await getDocs (collection (db, 'todos'));
          const fetchedTodos = [];
          querySnapshot.forEach (doc => {
            const todoData = doc.data ();
            todoData.id = doc.id;
            fetchedTodos.push (todoData);
          });
          // console.log (fetchedTodos.map((e)=>(e.checked)));
          setTodos (fetchedTodos);
        } catch (error) {
          console.error ('Error getting Todos!', error);
        }
      };
      getTodosFromStore ();

      const checkedTodos = todos.filter (todo => todo.checked);
      setDid (checkedTodos);

      const remainingTodos = todos.filter (todo => !todo.checked);
      setRemaining (remainingTodos);
    },
    [todos]
  );

  const counts = [
    {
      title: 'Remaining',
      count: remaining.length,
    },
    {
      title: 'Completed',
      count: did.length,
    },
    {
      title: 'Total',
      count: todos.length,
    },
  ];

  return (
    <section className="font-poppins max-container max-sm:padding-x flex flex-col gap-5 min-h-screen items-center mt-[40px]">

      {/* Count tags for remaining, completed and total */}

      <div className="flex justify-between max-sm:w-full max-sm:text-[10px] text-xs w-[450px]">
        {counts.map (count => (
          <div key={count.title}>
            <div className=" text-white font-semibold rounded-l-full flex items-center">
              <p className="bg-dark-green px-4 max-sm:px-2 py-0.5 leading-normal rounded-l-full">
                {count.title}
              </p>
              <p className="bg-light-yellow px-2 py-0.5 md:w-11 max-sm:px-2 leading-normal rounded-r-full text-black">
                {count.count}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Listing Todos, that can be edited and deleted */}

      {todos.map ((td, index) => (
        <div
          key={index}
          className={`${td.checked ? 'bg-yellow-green' : 'bg-light-yellow'} h-10 flex justify-between px-5 items-center w-[450px] max-sm:w-full shadow-sm rounded-full`}
        >

          <div
            className="cursor-pointer"
            onClick={() => checkToggle (index, !td.checked)}
          >
            {td.checked
              ? <FontAwesomeIcon icon={faCircleCheck} />
              : <FontAwesomeIcon icon={faCircle} />}
          </div>
          <input
            type="text"
            value={td.text || ''}
            onChange={e => editTodo (index, e.target.value)}
            className="bg-transparent w-[80%] h-7 outline-none"
          />
          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => removeTodo (index)}
            icon={faCircleXmark}
          />
        </div>
      ))}

    </section>
  );
};

export default Hero;
