/* eslint-disable react/prop-types */

import { IconBrandGoogle } from '@tabler/icons-react'

// Utility function for conditional class names
const cn = (...classes) => classes.filter(Boolean).join(' ')

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mb-40 mt-20 bg-primary text-text dark:bg-black'>
      <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
        Welcome to MeetPaw
      </h2>
      <p className='text-background text-sm max-w-sm mt-2 dark:text-neutral-300'>
        Login to MeetPaw
      </p>
      <form className='my-8' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
          <LabelInputContainer>
            <label htmlFor='firstname'>Username</label>
            <input id='firstname' placeholder='Tyler' type='text' required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className='mb-4'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            placeholder='ownerofpet@youremail.com'
            type='email'
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className='mb-4'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            placeholder='••••••••'
            type='password'
            required
          />
        </LabelInputContainer>

        <button
          className='bg-accent-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
          type='submit'
        >
          Login &rarr;
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
