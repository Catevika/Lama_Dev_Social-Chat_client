import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from '../../apiCalls';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './login.css';

export default function Login() {
	const email = useRef();
	const password = useRef();
	const { isFetching, dispatch } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
	};

	return (
		<div className='login-container'>
			<div className='login-wrapper'>
				<div className='login-left'>
					<div className='login-left-group'>
						<h3 className='login-logo'>Catevika Social</h3>
						<span className='login-desc'>
							Connect with friends and the world around you on Catevika Social
						</span>
					</div>
				</div>
				<div className='login-right'>
					<form className='login-form' onSubmit={handleSubmit}>
						<div className='login-form-group'>
							<label htmlFor='email' className='login-label'>
								Email:
							</label>
							<input
								ref={email}
								name='email'
								type='email'
								autoComplete='current-email'
								placeholder='Email'
								required
								className='login-input'
							/>
						</div>
						<div className='login-form-group'>
							<label htmlFor='password' className='login-label'>
								Password:
							</label>
							<input
								ref={password}
								name='password'
								type='password'
								autoComplete='current-password'
								placeholder='Password'
								required
								minLength='6'
								className='login-input'
							/>
						</div>
						<div className='login-btn-group'>
							{isFetching ? (
								<CircularProgress className='loading' color='inherit' />
							) : (
								<button className='login-btn'>Log In</button>
							)}
							<span className='login-forgot'>Forgot password?</span>
							{isFetching ? (
								<CircularProgress className='loading' color='inherit' />
							) : (
								<Link to='/register' className='login-register-link'>
									Create a new account
								</Link>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
