import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { Plus, X, Type, CalendarDays, UserRound, AlignLeft, Check } from 'lucide-react'

const PRIORITIES = [
  { label: 'Low', dot: 'bg-fuchsia-400' },
  { label: 'Medium', dot: 'bg-sky-400' },
  { label: 'High', dot: 'bg-amber-300' },
  { label: 'Very High', dot: 'bg-emerald-400' },
]

const MAX_DESC = 500

// shared input look: dark inset field, purple glow on focus
const field =
  'w-full rounded-xl border border-(--border-color) bg-black/25 py-2.5 pl-10 pr-3 text-sm text-(--light-pink) ' +
  'placeholder:text-(--light-pink)/30 outline-none transition ' +
  'focus:border-(--purple) focus:bg-black/35 focus:ring-4 focus:ring-(--purple)/25'

const Field = ({ label, icon: Icon, children }) => (
  <label className='flex flex-col gap-1.5'>
    <span className='text-xs font-medium text-(--light-pink)/70'>{label}</span>
    <div className='group relative'>
      <Icon
        size={16}
        className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-(--light-pink)/40 transition group-focus-within:text-(--light-pink)'
      />
      {children}
    </div>
  </label>
)

const CreateTaskModal = ({ setIsModalOpened }) => {
  const { employees, setEmployees } = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [justCreated, setJustCreated] = useState(false)

  const newTask = {
    active: false,
    newTask: true,
    completed: false,
    failed: false,
    taskTitle,
    taskDescription,
    taskData: { assignedTo, priority, dueDate },
  }

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsModalOpened(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setIsModalOpened])

  const submitHandler = (e) => {
    e.preventDefault()
    const data = structuredClone(employees)
    data.forEach((emp) => {
      const employeesData = Object.values(emp)[0]
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
    setJustCreated(true)
    setTimeout(() => setJustCreated(false), 1600)
  }

  // employee ids for the "Assign to" suggestions
  const employeeOptions = (employees || []).map((emp) => Object.values(emp)[0]).filter(Boolean)

  return (
    <div
      onMouseDown={(e) => e.target === e.currentTarget && setIsModalOpened(false)}
      className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4 backdrop-blur-xl'
    >
      <style>{`
        @keyframes ctm-in { from { opacity: 0; transform: translateY(14px) scale(.97) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) { .ctm-card { animation: none !important } }
      `}</style>

      {/* gradient-edged card: the one memorable thing */}
      <div
        className='ctm-card relative w-full max-w-4xl rounded-2xl bg-linear-to-br from-(--purple) via-(--border-color) to-(--light-pink)/60 p-px shadow-2xl shadow-black/50'
        style={{ animation: 'ctm-in .28s cubic-bezier(.2,.8,.2,1)' }}
      >
        <div className='relative overflow-hidden rounded-[15px] bg-(--dark-purple)'>
          {/* soft light bleeding in from the top-left */}
          <div className='pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-(--purple)/30 blur-3xl' />

          {/* header */}
          <div className='relative flex items-center justify-between border-b border-(--border-color) px-6 py-5'>
            <div className='flex items-center gap-3'>
              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-(--light-pink)'>
                <Plus size={20} strokeWidth={3} stroke='var(--dark-purple)' />
              </div>
              <div>
                <h1 className='text-lg font-semibold leading-tight text-(--light-pink)'>Create new task</h1>
                <p className='text-xs text-(--light-pink)/50'>Give it a clear title and hand it to someone.</p>
              </div>
            </div>
            <button
              type='button'
              onClick={() => setIsModalOpened(false)}
              aria-label='Close'
              className='cursor-pointer rounded-full p-2 text-(--light-pink)/70 transition hover:bg-(--purple) hover:text-(--light-pink) focus-visible:outline-2 focus-visible:outline-(--light-pink)'
            >
              <X size={20} />
            </button>
          </div>

          {/* form */}
          <form onSubmit={submitHandler} className='relative grid gap-6 p-6 md:grid-cols-2'>
            {/* left column */}
            <div className='flex flex-col gap-4'>
              <Field label='Task title' icon={Type}>
                <input
                  required
                  type='text'
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  placeholder='Make a UI design'
                  className={field}
                />
              </Field>

              <div className='grid grid-cols-2 gap-4'>
                <Field label='Due date' icon={CalendarDays}>
                  <input
                    required
                    type='date'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className={field + ' scheme-dark'}
                  />
                </Field>
                <Field label='Assign to' icon={UserRound}>
                  <input
                    required
                    type='text'
                    list='ctm-employees'
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    placeholder='Employee ID'
                    className={field}
                  />
                  <datalist id='ctm-employees'>
                    {employeeOptions.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name || ''}
                      </option>
                    ))}
                  </datalist>
                </Field>
              </div>

              <div className='flex flex-col gap-2'>
                <span className='text-xs font-medium text-(--light-pink)/70'>Category</span>
                <div className='flex flex-wrap gap-2'>
                  {PRIORITIES.map((p) => {
                    const active = priority === p.label
                    return (
                      <button
                        key={p.label}
                        type='button'
                        onClick={() => setPriority(active ? '' : p.label)}
                        aria-pressed={active}
                        className={
                          'flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs transition active:scale-95 ' +
                          (active
                            ? 'border-(--light-pink) bg-(--light-pink) font-medium text-(--dark-purple)'
                            : 'border-(--border-color) bg-black/20 text-(--light-pink)/80 hover:border-(--purple) hover:bg-(--purple)/30')
                        }
                      >
                        <span className={'h-2 w-2 rounded-full ' + p.dot} />
                        {p.label}
                      </button>
                    )
                  })}
                </div>
                <input
                  type='text'
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  placeholder='or type your own…'
                  className={field.replace('pl-10', 'pl-3') + ' mt-1'}
                />
              </div>
            </div>

            {/* right column */}
            <div className='flex flex-col gap-4'>
              <label className='flex flex-1 flex-col gap-1.5'>
                <span className='flex items-center justify-between text-xs font-medium text-(--light-pink)/70'>
                  <span className='flex items-center gap-1.5'>
                    <AlignLeft size={14} /> Description
                  </span>
                  <span className={taskDescription.length > MAX_DESC * 0.9 ? 'text-amber-300' : 'text-(--light-pink)/40'}>
                    {taskDescription.length}/{MAX_DESC}
                  </span>
                </span>
                <textarea
                  value={taskDescription}
                  maxLength={MAX_DESC}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  placeholder='What needs to be done, and what does done look like?'
                  className={field.replace('pl-10', 'pl-3') + ' min-h-44 flex-1 resize-none'}
                />
              </label>

              <div className='flex gap-3'>
                <button
                  type='button'
                  onClick={() => setIsModalOpened(false)}
                  className='cursor-pointer rounded-xl border border-(--border-color) px-5 py-3 text-sm text-(--light-pink)/80 transition hover:bg-white/5 active:scale-95'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className={
                    'flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-(--light-pink) transition active:scale-[.97] ' +
                    (justCreated
                      ? 'bg-emerald-500/80'
                      : 'bg-linear-to-r from-(--purple) to-(--border-color) hover:brightness-125 hover:shadow-lg hover:shadow-(--purple)/40')
                  }
                >
                  {justCreated ? (
                    <>
                      <Check size={16} strokeWidth={3} /> Task created
                    </>
                  ) : (
                    'Create task'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskModal
