import React from 'react';
import { signInUser, signUpUser } from './services/fetch-utils';


export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  export function handleSignIn(e) {
      e.preventDefault();

      const user = await signInUser(email, password);

      setUser(user);
  }

  export function handleSignUp(e) {
      e.preventDefault();

      const user = await signUpUser(email, password);

      setUser(user);
  }

  return (
    <div>
        <h2>Your Movie Watchlist</h2>
        <form onSubmit={handleSignIn}>
            <label> Email
              <input value={email} required type="email" name="email" onChange={e => setEmail(e.target.value)} /> 
            </label>
            <label> Password 
              <input value={password} required type="password" name="password" onChange={e => setPassword(e.target.value)} /> 
            </label>
            <button onClick={handleSignIn} type="button">Sign In</button>
            <button onClick={handleSignUp} type="button">Sign Up</button>
        </form>
    </div>
  )
}
