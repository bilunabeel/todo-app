const Header = ({todo,setTodo,todos,setTodos}) => {


const handleSubmit=(e)=>{
  e.preventDefault()
  const todoToAdd = {text:todo,checked:false}
  setTodos([...todos,todoToAdd])
  setTodo('')
}

  return (
    <header
      id="header"
      className="font-poppins_regular bg-dark-green pt-[100px] pb-[40px] flex justify-center"
    >
      <div className='w-[450px] max-sm:padding-x'>
        <h1 className="text-white font-poppins_semibold text-3xl left-0 mb-2">
          Todo<span className='font-poppins_extralight'>App</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-4 max-sm:flex-col">
          
          <input
            type="text"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder="Eg: Read Books"
            className="bg-light-yellow placeholder:text-yellow-900 px-5 text-sm rounded-full shadow-md h-10 w-[80%] max-sm:w-[100%]"
          />
          <button
          type="submit"
           className="bg-white font-poppins_semibold text-sm w-28 max-sm:w-full h-10  rounded-full shadow-md">
            Add Task
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
