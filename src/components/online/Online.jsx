import './online.css';

export default function online({ user }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className='rightbar-user'>
			<div className='rightbar-profile-img-container'>
				<div className='rightbar-online-container'>
					<img
						src={serverPublic + 'Person/' + user.profilePicture}
						alt=''
						className='rightbar-profile-img'
					/>
					<span className='rightbar-online'></span>
				</div>
				<span>
					<strong>{user.username}</strong>
				</span>
			</div>
		</li>
	);
}
