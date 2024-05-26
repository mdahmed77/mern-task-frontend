import React from 'react'
import Input from '../utils/Input'
import Button from '../utils/Button'

const TaskForm = ({ createTask, handleValue, taskName, editing, updateTask }) => {
    return (
        <form className='flex items-center w-full mb-2' onSubmit={editing ? updateTask : createTask}>
            <Input type={'text'} placeholder={'Add New Task'} sx={'rounded-r-none grow'} value={taskName} onChange={handleValue} />
            <Button type={'submit'} name={editing ? 'Update' : 'Add'} sx={`rounded-l-none ${editing ? '!bg-amber-500' : ''}`} />
        </form>
    )
}

export default TaskForm