import {useSelector} from 'react-redux'

function Profile() {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl text-center font-semibold my-5'>Profile</h1>
      <form className='flex flex-col gap-3'>
        <img src={currentUser.profilePicture} className='h-24 w-24 rounded-full self-center object-cover' alt="Profile Picture"/>
        <input type='text' defaultValue={currentUser.username} placeholder='Username' className='bg-slate-100 p-2 rounded-lg' id='username'/>
        <input type='email' defaultValue={currentUser.email} placeholder='Email' className='bg-slate-100 p-2 rounded-lg' id='email'/>
        <input type='password' placeholder='Password' className='bg-slate-100 p-2 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white uppercase p-2 rounded-lg font-semibold hover:opacity-95'>Update</button>
      </form>
      <div className='flex justify-between mt-3'>
        <span className='text-red-600 cursor-pointer'>Delete Account</span>
        <span className='text-red-600 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile