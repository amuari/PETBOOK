import Button from './Button'

const Navbar = () => {
  return (
    <div>
      <nav className='container  flex justify-around p-10  text-text'>
        {/* logo */}
        <span className='font-extrabold text-2xl'>
          <a href='/'>MEETPAW</a>
        </span>
        <div className='space-x-5'>
          <a href='/'>Home</a>
          <a href='/pets'>Pets</a>
          <a href='/upload'>Upload</a>
          <a href='/profile'>Profile</a>
        </div>
        <a href='/login'>
          <Button text='login' />
        </a>
      </nav>
    </div>
  )
}

export default Navbar
