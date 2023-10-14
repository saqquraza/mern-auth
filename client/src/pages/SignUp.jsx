import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [respMessage, setRespMessage] = useState();
  const [isResp, setIsResp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setIsResp(false)
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setIsResp(false)
    const res = await fetch('/api/auth//signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();
    setIsResp(true)
    setRespMessage(data?.message)
    if (data?.success === false) {
      setRespMessage(data?.error);
      setLoading(false);
      return;
    }
    setLoading(false);
    setFormData({});
    navigate('/sign-in')
  }
  return (
    <div className='max-w-md mx-auto p-3'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input type='text' id='username' placeholder='Enter User Name' className='bg-slate-100 p-2 rounded-lg ' onChange={handleChange} required={true} value={formData.username || ''} />
        <input type='email' id='email' placeholder='Enter User Email' className='bg-slate-100 p-2 rounded-lg ' onChange={handleChange} required={true} value={formData.email || ''} />
        <input type='password' id='password' placeholder='Enter User Password' className='bg-slate-100 p-2 rounded-lg ' onChange={handleChange} required={true} value={formData.password || ''} />
        <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-lg uppercase font-semibold hover:opacity-95 disabled:opacity-80'>{loading ? 'loading..' : 'Sign Up'}</button>
        <OAuth/>
        <p className='text-red-500 text-center text-lg'>{isResp && respMessage}</p>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp