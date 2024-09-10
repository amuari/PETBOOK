const Section = () => {
  return (
    <section className='container text-text   mt-4 md:mt-20 flex flex-col md:flex-row space-x-2 px-4 md:px-20'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50'>
          Where Pets Connect, and Memories Are Just a
          <span className='font-thin tracking-wider text-accent'>
            {' '}
            Paw Away.
          </span>
        </h1>
        <p className='text-primary font-bold my-10 text-gray-800  max-w-xl dark:text-gray-200'>
          Connecting You and Your Pets Effortlessly.
        </p>
        <div className='relative px-8 py-2 border rounded-3xl  cursor-pointer inline-block'>
          <div className=' absolute inset-0 transform translate-x-1 translate-y-2 rounded-3xl border px-8 py-2 '></div>
          <a
            href='/signup'
            className='relative   text-gray-700 font-bold hover:text-green-500 transition duration-100 transform hover:-translate-y-2 hover:-translate-x-1 py-2'
          >
            Get Started
          </a>
        </div>
      </div>
      <div className='w-full md:w-1/2 h-full'>
        <img
          src='/images/pets1.jpg'
          alt='pets image'
          className='object-contain rounded-lg'
        />
      </div>
    </section>
  )
}

export default Section
