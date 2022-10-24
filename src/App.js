import { useContext } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import ErrorPage from './ErrorPage';
import './app.css';

function App() {
	const { user } = useContext(AuthContext);
	return (
		<Routes>
			<Route
				index
				path='login'
				element={user ? <Navigate to='/' replace={true} /> : <Login />}
			/>
			<Route
				path='register'
				element={user ? <Navigate to='/' replace={true} /> : <Register />}
			/>
			<Route path='/' element={user ? <Home /> : <Register />} />
			<Route path='posts/profile/:username' element={<Profile />} />
			<Route path='error' element={<ErrorPage />} />
			<Route path='*' element={<NoMatch />} />
		</Routes>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to='/home'>Go to the home page</Link>
			</p>
		</div>
	);
}

export default App;
