import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Upload = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    favoriteFood: '',
    funFact: '',
    status: '',
  })

  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = new FormData()
      data.append('name', formData.name)
      data.append('age', formData.age)
      data.append('favorite', formData.favoriteFood)
      data.append('funfact', formData.funFact)
      data.append('status', formData.status)

      await axios.post('http://localhost:4040/createpet', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(data),
      })
      // Redirect to a certain route
      navigate('/pets')
    } catch (error) {
      console.warn(error)
    }
  }
  return (
    <div className='pb-36'>
      <h1 className='text-center font-extrabold text-4xl'> Upload your Pet</h1>
      <form
        action='/upload'
        method='post'
        encType='multipart/form-data'
        className=' place-items-center  mx-auto container'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleChangeInput}
            value={formData.name}
            required
            className='mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Age
          </label>
          <input
            type='number'
            id='age'
            name='age'
            onChange={handleChangeInput}
            value={formData.age}
            required
            className='mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label
            htmlFor='favoriteFood'
            className='block text-sm font-medium text-gray-700'
          >
            Favorite Food
          </label>
          <input
            type='text'
            id='favoriteFood'
            name='favoriteFood'
            onChange={handleChangeInput}
            value={formData.favoriteFood}
            className='mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label
            htmlFor='funFact'
            className='block text-sm font-medium text-gray-700'
          >
            FunFact
          </label>
          <input
            type='text'
            id='funFact'
            name='funFact'
            onChange={handleChangeInput}
            value={formData.funfact}
            className='mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        <div>
          <label
            htmlFor='status'
            className='block text-sm font-medium text-gray-700'
          >
            Status
          </label>
          <input
            type='text'
            id='status'
            name='status'
            onChange={handleChangeInput}
            value={formData.status}
            required
            placeholder='Owned / Up for Adoption '
            className='mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
          <input
            type='file'
            id='image'
            name='image'
            className='mt-1 block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
          />
        </div>
        <button
          type='submit'
          className='w-1/3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Upload
