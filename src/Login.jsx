import { useState } from 'react'
import './Login.css'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) =>
    {
      e.preventDefault();
      

      if(!username || !password)
      {
        setError('Please Fill both username and password');
      }
      else{
        setError('')
        alert('Logged in Successfully');
      }
    };

  return (
    
    <div className='log-container'>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div className='input'>
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <i className="fas fa-user"></i>            
            <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
        </div>
        
        <div className='input'>
            <label htmlFor="password">Password</label>
            <div className='input-wrapper'>
              <i className='fas fa-lock'></i>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </div>
        <div className='remember'>
          <input type='checkbox' id='rememberme' value="rememberme"></input>
          <label htmlFor='rememberme'>Rememberme</label>
          <label htmlFor='forget'>Forget password?</label>
        </div>
        {error && <div className='error-message'>{error}</div>}

        <button type='submit'>Login</button>



        
    </form>
    </div>
  )
}
