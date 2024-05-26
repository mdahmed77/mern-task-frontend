import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import Task from './Task'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import { URL } from '../App';
import Loading from '../utils/Loading';

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [taskID, setTaskID] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        completed: false,
    })
    const { name } = formData
    const handleInputValue = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, name: value });
    }

    const getTasks = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${URL}/api/tasks`)
            setTasks(data);
            setTimeout(() => {
                setIsLoading(false)
            }, 600);
        } catch (error) {
            toast.error(error.message);
            console.log(error)
            setTimeout(() => {
                setIsLoading(false)
            }, 600);
        }
    }

    useEffect(() => {
        getTasks();
    }, [])

    const createNewTask = async (e) => {
        e.preventDefault()
        if (name === '') {
            return toast.error('Task input field cannot be Empty');
        }
        try {
            await axios.post(`${URL}/api/tasks`, formData);
            toast.success('Task Added Successfully!')
            setFormData({ name: "" })
            getTasks();
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${URL}/api/tasks/${id}`);
            getTasks();
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getSingleTask = async (task) => {
        setFormData({ name: task.name, completed: false })
        setTaskID(task._id);
        setIsEditing(true)
    }
    const updateTask = async (e) => {
        e.preventDefault()
        if (name === '') {
            return toast.error('Task input field cannot be Empty');
        }
        try {
            await axios.put(`${URL}/api/tasks/${taskID}`, formData);
            toast.success('Task Updated Successfully!')
            setFormData({ ...formData, name: "" })
            setIsEditing(false)
            getTasks();
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
    }

    const completeTask = async (task) => {
        const newFormData = {
            name: task.name,
            completed: true
        }
        try {
            await axios.put(`${URL}/api/tasks/${task._id}`, newFormData)
            getTasks();
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
    }

    useEffect(() => {
        const doneTasks = tasks.filter((task) => {
            return task.completed === true
        });
        setCompletedTasks(doneTasks)
    }, [tasks])

    return (
        <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-white px-3">
            <ToastContainer
                position="top-center"
                theme='colored'
            />
            <div className="top-0 left-0 -translate-y-1/2 -translate-x-1/2 absolute h-[400px] w-[400px] bg-gradient-to-r from-violet-600 to-aqua-700 rounded-full z-10"></div>
            <div className="absolute h-full w-full bg-gradient-to-br from-white/30 to-violet-400/50 z-20 backdrop-blur-3xl"></div>
            <div className="relative z-30 max-w-[500px] w-full flex flex-col items-center gap-2 text-center bg-white rounded-xl shadow-md shadow-violet-950/10 py-5 px-4">
                <h1 className="text-3xl font-normal text-slate-900">
                    <span className="font-bold text-violet-700">Task Manager</span>
                </h1>
                <p className="text-sm text-slate-500 -mt-1 mb-3">
                    This is a Mern Stack App for Task Management
                </p>
                <TaskForm
                    createTask={createNewTask}
                    handleValue={handleInputValue}
                    taskName={name}
                    editing={isEditing}
                    updateTask={updateTask}
                />
                {tasks.length > 0 &&
                    <div className="flex justify-between items-center w-full">
                        <span className='font-medium text-slate-900 text-base'>Total Tasks: <b className='text-rose-600'>{tasks.length}</b></span>
                        <span className='font-medium text-slate-900 text-base'>Completed: <b className='text-green-600'>{completedTasks.length}</b></span>
                    </div>
                }
                {isLoading
                    ? <Loading />
                    : <div className="flex flex-col max-h-[800px] overflow-y-auto invisible-scroll w-full p-[1px]">
                        {!isLoading && tasks.length === 0
                            ? (<p className="bg-rose-200 p-3 rounded-sm text-rose-600 font-medium">No Tasks Found</p>)
                            : (
                                <>
                                    {tasks.map((task, index) => (
                                        <Task
                                            key={task._id}
                                            data={task}
                                            index={index}
                                            deleteTask={deleteTask}
                                            getSingleTask={getSingleTask}
                                            setTaskCompleted={completeTask}
                                        />
                                    ))}
                                </>
                            )
                        }
                    </div>
                }

            </div>
        </div>
    )
}

export default TaskList