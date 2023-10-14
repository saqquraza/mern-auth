import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
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
    const res = await fetch('/api/auth/signin', {
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
    navigate('/')
  }
  return (
    <div className='max-w-md mx-auto p-3'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <input type='email' id='email' placeholder='Enter User Email' className='bg-slate-100 p-2 rounded-lg ' onChange={handleChange} required={true} value={formData.email || ''} />
        <input type='password' id='password' placeholder='Enter User Password' className='bg-slate-100 p-2 rounded-lg ' onChange={handleChange} required={true} value={formData.password || ''} />
        <button disabled={loading} className='bg-slate-600 text-white p-3 rounded-lg uppercase font-semibold hover:opacity-95 disabled:opacity-80'>{loading ? 'loading..' : 'Sign In'}</button>
        <p className='text-red-500 text-center text-lg'>{isResp && respMessage}</p>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
    </div>
  )
}

export default Signin