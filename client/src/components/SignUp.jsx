/* eslint-disable react/prop-types */
import { useState } from 'react'
import { IconBrandGoogle } from '@tabler/icons-react'

// Utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(' ')

export default function Signup() {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Handler to update form state
  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Basic validation
    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.password
    ) {
      setError('All fields are required.')
      setLoading(false)
      return
    }

    try {
      // Simulating an API call
      const response = await fetch('https://api.example.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to sign up')
      }

      console.log('User signed up successfully')
      // You can handle the success response here
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mb-40 mt-20 bg-primary text-text dark:bg-black'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Welcome to MeetPaw
      </h2>
      <p className='text-background text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Sign up to MeetPaw
      </p>
      <form className='my-8' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <LabelInputContainer>
            <label htmlFor='firstname'>First name</label>
            <input
              id='firstname'
              placeholder='Tyler'
              type='text'
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <label htmlFor='lastname'>Last name</label>
            <input
              id='lastname'
              placeholder='Durden'
              type='text'
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            placeholder='ownerofpet@youremail.com'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            placeholder='••••••••'
            type='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button
          className='bg-accent-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Sign up &rarr;'}
        </button>

        <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />

        <div className='flex flex-col space-y-4'>
          <button
            className='relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]'
            type='button'
          >
            <IconBrandGoogle className='h-4 w-4 text-neutral-800 dark:text-neutral-300' />
            <span className='text-neutral-700 dark:text-neutral-300 text-sm'>
              Google
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  )
}
