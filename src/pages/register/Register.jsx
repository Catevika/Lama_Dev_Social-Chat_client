import axios from 'axios';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordConfirmation = useRef();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (passwordConfirmation.current.value !== password.current.value) {
			password.current.setCustomValidity('Passwords do not match!');
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value
			};
			try {
				await axios.post('/auth/register', user);
				navigate('/login');
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className='register-container'>
			<div className='register-wrapper'>
				<div className='register-left'>
					<div className='register-left-group'>
						<h3 className='register-logo'>Social-Chat</h3>
						<span className='register-desc'>
							Connect with friends and the world around you on Social-Chat
						</span>
					</div>
				</div>
				<div className='register-right'>
					<form className='register-form' onSubmit={handleSubmit}>
						<div className='register-form-group'>
							<label htmlFor='username' className='register-label'>
								Username:
							</label>
							<input
								name='username'
								type='text'
								autoComplete='current-username'
								placeholder='Username'
								className='register-input'
								ref={username}
								required
							/>
						</div>
						<div className='register-form-group'>
							<label htmlFor='email' className='register-label'>
								Email:
							</label>
							<input
								name='email'
								type='email'
								autoComplete='current-email'
								placeholder='Email'
								className='register-input'
								ref={email}
								required
							/>
						</div>
						<div className='register-form-group'>
							<label htmlFor='password' className='register-label'>
								Password:
							</label>
							<input
								name='password'
								type='password'
								autoComplete='new-password'
								placeholder='Password'
								className='register-input'
								ref={password}
								required
								minLength={6}
							/>
						</div>
						<div className='register-form-group'>
							<label htmlFor='password-confirmation' className='register-label'>
								Password confirmation:
							</label>
							<input
								name='password-confirmation'
								type='password'
								autoComplete='current-password'
								placeholder='Password confirmation'
								className='register-input'
								ref={passwordConfirmation}
								required
							/>
						</div>
						<div className='register-btn-group'>
							<button type='submit' className='register-btn'>
								Sign Up
							</button>
							<span className='register-forgot'>Already registered?</span>
							<Link to='/login' className='register-register-link'>
								Log into account
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
