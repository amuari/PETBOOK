const Navbar = () => {
  return (
    <div>
      <nav className='container  flex justify-around p-10  text-text'>
        {/* logo */}
        <span className='font-extrabold text-2xl'>
          <a href='/'>PETBOOK</a>
        </span>
        <div className='space-x-5'>
          <a href='/'>Home</a>
          <a href='/pets'>Pets</a>
          <a href='/upload'>Upload</a>
          <a href='/profile'>Profile</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
