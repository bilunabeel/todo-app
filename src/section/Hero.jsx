// import { icon } from "@fortawesome/fontawesome-svg-core"
import {faCircle, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useState} from 'react';

const Hero = ({todos, setTodos}) => {
  const [did, setDid] = useState ([]);
  const [remaining,setRemaining]=useState([])

  const checkToggle = (index, value) => {
    const todosArray = [...todos];
    todosArray[index].checked = value;
    setTodos (todosArray);
  };

  const editTodo = (index, newText) => {
    const updated = [...todos];
    console.log (updated[index]);
    updated[index].text = newText;
    setTodos (updated);
  };

  const removeTodo = indexToRemove => {
    const updated = todos.filter ((todo, index) => index !== indexToRemove);
    setTodos (updated);
  };

  useEffect(()=>{

  const checkedTodos = todos.filter((todo)=>todo.checked)
  setDid(checkedTodos)

  const remainingTodos = todos.filter((todo)=>!todo.checked)
  setRemaining(remainingTodos)

},[todos])


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

      <div className="flex justify-evenly max-sm:w-full max-sm:text-[10px] text-xs w-[450px]">
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
          <div className='cursor-pointer' onClick={() => checkToggle (index, !td.checked)}>
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
          className='cursor-pointer'
            onClick={() => removeTodo (index)}
            icon={faCircleXmark}
          />
        </div>
      ))}
    </section>
  );
};

export default Hero;
