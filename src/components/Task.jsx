import React from 'react'
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
const Task = ({ data, index, deleteTask, getSingleTask, setTaskCompleted }) => {
  return (
    <div className={`group/task flex items-center justify-between py-2 lg:pr-4 pr-2 hover:pr-2 pl-4 smooth rounded-[4px] bg-slate-100 outline outline-1 outline-slate-200 w-full mt-2 min-h-[56px] border-l-[6px] ${data.completed ? 'border-green-600' : 'border-rose-600'}`}>
      <h6 className='font-normal text-black text-lg'><strong>{index + 1}.</strong> {data.name}</h6>
      <div className="inline-flex items-center gap-1">
        <button onClick={() => setTaskCompleted(data)} className={`group/button inline-flex justify-center items-center gap-0 lg:hover:gap-1 smooth text-sm lg:h-2 h-7 lg:group-hover/task:h-10 lg:min-w-2 min-w-7 lg:group-hover/task:min-w-10 px-0 lg:hover:px-2 lg:rounded-lg rounded-md bg-green-600 text-white ${data.completed && 'hidden'}`}>
          <IoMdDoneAll className='lg:text-[0] text-base lg:group-hover/task:text-xl smooth' />
          <span className='lg:block hidden smooth w-0 overflow-hidden group-hover/button:w-9'>Done</span>
        </button>
        <button onClick={() => getSingleTask(data)} className='group/button inline-flex justify-center items-center gap-0 lg:hover:gap-1 smooth text-sm lg:h-2 h-7 lg:group-hover/task:h-10 lg:min-w-2 min-w-7 lg:group-hover/task:min-w-10 px-0 lg:hover:px-2 lg:rounded-lg rounded-md bg-amber-500 text-white'>
          <MdOutlineEdit className='lg:text-[0] text-base lg:group-hover/task:text-[22px] smooth' />
          <span className='lg:block hidden smooth w-0 overflow-hidden group-hover/button:w-7'>Edit</span>
        </button>
        <button onClick={() => deleteTask(data._id)} className='group/button inline-flex justify-center items-center gap-0 lg:hover:gap-1 smooth text-sm lg:h-2 h-7 lg:group-hover/task:h-10 lg:min-w-2 min-w-7 lg:group-hover/task:min-w-10 px-0 lg:hover:px-2 lg:rounded-lg rounded-md bg-rose-700 text-white'>
          <FaRegTrashCan className='lg:text-[0] text-base lg:group-hover/task:text-xl smooth' />
          <span className='lg:block hidden smooth w-0 overflow-hidden group-hover/button:w-10'>Delete</span>
        </button>
      </div>
    </div>
  )
}

export default Task