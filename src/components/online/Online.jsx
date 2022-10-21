import './online.css';

export default function online({ user }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className='rightbar-friend'>
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
					<b>{user.username}</b>
				</span>
			</div>
		</li>
	);
}
