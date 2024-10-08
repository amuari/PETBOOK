const navigation = {
  connect: [
    {
      name: 'Twitter',
      href: '/',
    },
    {
      name: 'Github',
      href: '/',
    },
    {
      name: 'LinkedIn',
      href: '/',
    },
  ],
  company: [
    { name: 'Pets', href: '/pets' },
    { name: 'Upload', href: '/upload' },
    { name: 'Profile', href: '/profile' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby='footer-heading'
      className='font-inter w-full max-w-7xl'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-2'>
        <div className='flex flex-col justify-between lg:flex-row'>
          <div className='space-y-8'>
            <p className='text-md max-w-xs leading-6 text-gray-700 dark:text-gray-300'>
              Not your average component library - build faster, launch sooner.
            </p>
            <div className='flex space-x-6 text-sm text-gray-700  dark:text-gray-300'>
              {/* <div>Made with ❤️ by Derrick Amuah Abbey.</div> */}
            </div>
          </div>
          {/* Navigations */}
          <div className='mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2'>
            <div className='md:mt-0'>
              <h3 className='text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200'>
                Connect
              </h3>
              <div className='mt-6 space-y-4'>
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target='_blank'
                      rel='noreferrer'
                      className='text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200'
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200'>
                  Company
                </h3>
                <div className='mt-6 space-y-4'>
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200'
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10'>
          <p className='text-xs leading-5 text-gray-700 dark:text-gray-300'>
            &copy; 2024 AmuariDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default TwoColumnFooter
