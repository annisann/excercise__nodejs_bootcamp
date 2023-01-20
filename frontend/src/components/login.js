import React, { useState } from 'react'
import ApiLogin from '../api/apiLogin'
import { useNavigate } from 'react-router-dom'
import config from '../config/config'

export default function Login() {
    const navigate = useNavigate()
    
    // States
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await ApiLogin.login(username, password)

        if (typeof result === 'object') {
            // setMessage(result.message)
            navigate(
                config.endpoint.signin,
                {
                    state: {
                        username
                    }
                })
                
        } else {
            setMessage(result)
        }
    }
    
    return (
        <div class="form-signin d-flex flex-row justify-center">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                <div class="form-floating">
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)
                        }
                        required
                        value={username}
                        ></input>
                    <label for="floatingInput">Username</label>
                </div>

                <div class="form-floating">
                    <input
                        type="password" 
                        class="form-control"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        />
                    <label for="floatingPassword">Password</label>
                </div>

                <button 
                    class="submit-btn"
                    // type="submit"
                    type='button'
                    onClick={handleLogin}
                    >
                    Sign in
                </button>
                <p>{message}</p>              
            </form>
        </div>
    )
}
