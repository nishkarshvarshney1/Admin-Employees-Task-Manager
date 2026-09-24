import React, { useState, useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';
import {Plus} from 'lucide-react'

const CreateTask = () => {
  const {employees, setEmployees} = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const newTask = {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle,
    taskDescription,
    taskData: { assignedTo, priority, dueDate }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const data = structuredClone(employees)
    data.forEach((e) => {
      const employeesData = Object.values(e)[0]
      if (assignedTo === employeesData.id) {
        employeesData.tasks.push(newTask)
        employeesData.newTask = employeesData.newTask + 1

      }
    })
    localStorage.setItem('employees', JSON.stringify(data))
    setEmployees(data)
    setAssignedTo('')
    setDueDate('')
    setPriority('')
    setTaskDescription('')
    setTaskTitle('')
  }
  return (
    <div className='p-5 flex flex-col gap-2 text-(--light-pink)'>
      <div className='flex items-center gap-2'>
        <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center'><Plus size={16} strokeWidth={3} stroke="var(--dark-purple)"/></div>
      <h1 className='text-2xl'>Create New Task</h1>
      </div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex justify-between align-center text-sm gap-7'>
        <div className='flex flex-col w-[48%] gap-1'>
          <h2>Task Title</h2>
          <input onChange={(e) => {
            setTaskTitle(e.target.value)
          }}
            value={taskTitle}
            type="text" placeholder='Make a UI design' className='border border-white px-2 py-1 rounded-sm mb-2' />
          <h2>Date</h2>
          <input onChange={(e) => {
            setDueDate(e.target.value)
          }}
            value={dueDate}
            type="date" className='border border-white px-2 py-1 rounded-sm mb-2' />
          <h2>Assign To</h2>
          <input onChange={(e) => {
            setAssignedTo(e.target.value)
          }}
            value={assignedTo}
            type="text" placeholder='Name...' className='border border-white px-2 py-1 rounded-sm mb-2' />
          <h2>Priority</h2>
          <input onChange={(e) => {
            setPriority(e.target.value)
          }}
            value={priority}
            type="text" placeholder='Design, Development, etc...' className='border border-white px-2 py-1 rounded-sm' />
        </div>
        <div className='flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <h2>Description</h2>
          <textarea onChange={(e) => {
            setTaskDescription(e.target.value)
          }}
            value={taskDescription}
            placeholder="Detailed description of the task (Max 500 word)" className='border-white border rounded-sm p-2 h-42' cols="50"></textarea>
            </div>
          <button className='bg-(--purple) py-3 rounded-sm hover:bg-green-300/70 transition cursor-pointer active:scale-90 hover:scale-101'>Create Task</button>
          </div>
      </form>
    </div>
  )
}

export default CreateTask
