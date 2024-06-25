import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };

      
  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full mb-4">
    <input 
     type="text" 
     value={value} 
     onChange={(e) => setValue(e.target.value)} 
     className="outline-none mt-4 mb-8 py-2 px-4 w-[300px] text-white"
     style={{background:"none", border:"1px solid #739a93"}}
     placeholder='Enter the task' 
    />
    <button 
      type="submit" 
      className=' bg-[#00806b] text-white border-none p-[0.55rem] cursor-pointer'>
      Add Task
    </button>
  </form>
  )
}
