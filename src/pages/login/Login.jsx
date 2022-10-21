import './login.css';

export default function Login() {
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
					<form className='login-form'>
						<div className='login-form-group'>
							<label htmlFor='email' className='login-label'>
								Email:
							</label>
							<input
								name='email'
								type='email'
								autoComplete='current-email'
								placeholder='Email'
								className='login-input'
							/>
						</div>
						<div className='login-form-group'>
							<label htmlFor='password' className='login-label'>
								Password:
							</label>
							<input
								name='password'
								type='password'
								autoComplete='current-password'
								placeholder='Password'
								className='login-input'
							/>
						</div>
						<div className='login-btn-group'>
							<button className='login-btn'>Log In</button>
							<span className='login-forgot'>Forgot password?</span>
							<button className='login-register-btn'>
								Create a new account
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
