import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold text-gray-600'>Register</h2>

      <form className='my-4' autoComplete='off'>
        <div className='mb-4'>
          <label htmlFor='name' className='font-bold text-sm text-gray-500'>
            Name
          </label>
          <input
            id='name'
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100'
            type='text'
            name='name'
            placeholder='youremail@email.com'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='font-bold text-sm text-gray-500'>
            Email
          </label>
          <input
            id='email'
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100'
            type='email'
            name='email'
            placeholder='youremail@email.com'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='pass' className='font-bold text-sm text-gray-500'>
            Password
          </label>
          <input
            id='pass'
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100'
            type='password'
            name='password'
            placeholder='***********'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='pass2' className='font-bold text-sm text-gray-500'>
            Repeat password
          </label>
          <input
            id='pass2'
            className='px-4 py-2 w-full | rounded-sm text-sm bg-gray-100'
            type='password'
            name='password2'
            placeholder='***********'
          />
        </div>

        <div className='my-6'>
          <button
            type='submit'
            className='px-4 py-2 w-full | bg-purple-600 rounded-sm text-white text-sm font-semibold transition transition-300 | hover:bg-purple-800'
          >
            Register
          </button>
        </div>
      </form>

      <div className='pt-4 text-center'>
        <Link
          className='inline-block text-gray-800 underline transform transition transition-300 | hover:scale-105'
          to='/login'
        >
          Already registered?
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
