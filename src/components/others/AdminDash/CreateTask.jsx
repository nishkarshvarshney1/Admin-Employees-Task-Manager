import React, { useState, useContext, use } from 'react'
import { AuthContext } from '../../../context/AuthProvider';
import { ChevronDown, Plus } from 'lucide-react'

const PRIORITIES = [
  { lable: 'Low', dot: 'bg-green-400' },
  { lable: 'Medium', dot: 'bg-amber-400' },
  { lable: 'High', dot: 'bg-fuchsia-400' },
  { lable: 'Very High', dot: 'bg-red-400' }
]

const CreateTask = () => {
  const { employees, setEmployees } = useContext(AuthContext)
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
  const MAX_DESC = 500
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
    <div className='p-px rounded-2xl bg-linear-to-br from-(--purple) via-(--border-color) to-(--border-color)'>
      <div className='p-5 flex flex-col gap-3 text-(--light-pink) bg-(--dark-purple) rounded-2xl relative z-11'>
        <div className='flex items-center gap-2'>
          <div className='w-5 h-5 rounded-full bg-(--light-pink) flex items-center justify-center'><Plus size={16} strokeWidth={3} stroke="var(--dark-purple)" /></div>
          <h1 className='text-base'>Create New Task</h1>
        </div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex justify-between align-center text-xs gap-7'>
          <div className='flex flex-col w-[48%] gap-1'>
            <h2>Task Title</h2>
            <input onChange={(e) => {
              setTaskTitle(e.target.value)
            }}
              value={taskTitle}
              type="text" placeholder='Make a UI design' className='focus:outline-none focus:border-(--purple) focus:shadow-[0_0_2px_var(--purple)] border border-(--border-color) bg-[#121432]/50 py-2.5 px-3 rounded-lg mt-1 mb-3' />
            <h2>Date</h2>
            <input onChange={(e) => {
              setDueDate(e.target.value)
            }}
              value={dueDate}
              type="date" className='focus:outline-none focus:border-(--purple) focus:shadow-[0_0_2px_var(--purple)] border border-(--border-color) py-2.5 px-3 rounded-lg bg-[#121432]/50 mt-1 mb-3 [&::-webkit-calendar-picker-indicator]:invert' />
            <h2>Assign To</h2>
            <select onChange={(e) => {
              setAssignedTo(e.target.value)
            }}
              value={assignedTo}
              name="Employees" id="employees"
              className='focus:outline-none focus:border-(--purple) focus:shadow-[0_0_2px_var(--purple)] border border-(--border-color) py-2.5 px-3 rounded-lg mt-1 mb-3 bg-[#121432]/50 appearance-none relative'>
              <option value=''>Select Employee</option>
              {employees.map((e, idx) => {
                const employeesData = Object.values(e)[0]
                return <option key={idx} value={employeesData.id}>
                  {employeesData.name}
                </option>
              })}
              <ChevronDown className='absolute right-3' />
            </select>
            <h2>Priority</h2>
            <div className='flex gap-3 mt-1'>
              {PRIORITIES.map((e, idx) => {
                return <div onClick={() => {
                  setPriority(e.lable)
                }}
                  key={idx} className={`flex items-center gap-2 active:scale-95 border border-(--purple)/30 py-1.5 px-3 rounded-2xl cursor-pointer transition 
                ${priority === e.lable
                      ? 'bg-(--light-pink) text-black'
                      : 'hover:bg-(--purple)/30 hover:border-(--purple) bg-[#121432]/50'}`}>
                  <div className={`w-2 h-2 rounded-full ${e.dot}`}></div>
                  {e.lable}
                </div>
              })}
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-1'>
              <div className='flex justify-between px-2'>
                <h2>Description</h2>
                <span className={`text-(--light-pink)/50 ${taskDescription.length < MAX_DESC * 0.9 ? 'text-(--light-pink)' : 'text-amber-400'}`}>
                  {`${taskDescription.length} / ${MAX_DESC}`}
                </span>
              </div>
              <textarea onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
                value={taskDescription}
                placeholder="Detailed description of the task" className='focus:outline-none focus:border-(--purple) focus:shadow-[0_0_2px_var(--purple)] border bg-[#121432]/50 border-(--border-color) rounded-xl py-2.5 px-3 h-51 mt-2 transition' cols="55"></textarea>
            </div>
            <button className='bg-linear-to-r from-(--purple)/80 to-(--dark-purple) py-3 rounded-xl transition cursor-pointer active:scale-95 border border-(--border-color) hover:bg-(--purple)'>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
