import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import AuthPage from './AuthPage';
import SearchPage from './SearchPage';
import WatchListPage from './WatchListPage';
import { getUser, logout } from './services/fetch-utils';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function getUserObject() {
      const data = await getUser();
      setCurrentUser(data);
    }
    getUserObject();
    
  }, []);

  
  return (
    <Router>
      <div>
        {
          currentUser &&
          <>
            <NavLink activeClassName="active-class" to="/search">
              Search
            </NavLink>
            <NavLink activeClassName="active-class" to="/watchlist">
              Watchlist
            </NavLink>
            <button onClick={logout}>Logout</button>
          </>
        }
        <Switch>
          <Route exact path='/'>
            {
              currentUser
                ? <Redirect to='/search' />
                : <AuthPage setUser={setCurrentUser} />
            }
          </Route>
          <Route exact path='/search'>
            {
              !currentUser
                ? <Redirect to='/' />
                : <SearchPage />
            }
          </Route>
          <Route exact path='/saved'>
            {
              !currentUser
                ? <Redirect to='/' />
                : <WatchListPage />
            }
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
