import './register.css';

export default function Register() {
	return (
		<div className='register-container'>
			<div className='register-wrapper'>
				<div className='register-left'>
					<div className='register-left-group'>
						<h3 className='register-logo'>CatevikaSocial</h3>
						<span className='register-desc'>
							Connect with friends and the world around you on CatevikaSocial
						</span>
					</div>
				</div>
				<div className='register-right'>
					<form className='register-form'>
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
							/>
						</div>
						<div className='register-btn-group'>
							<button className='register-btn'>Sign Up</button>
							<span className='register-forgot'>Already registered?</span>
							<button className='register-register-btn'>
								Log into account
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
