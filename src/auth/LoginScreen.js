import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold text-gray-600'>Login</h2>

      <form className='my-4' autoComplete='off'>
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
      </form>

      <div className='pt-4 text-center'>
        <Link
          className='inline-block text-gray-800 underline transform transition transition-300 | hover:scale-105'
          to='/register'
        >
          Create a new account
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
