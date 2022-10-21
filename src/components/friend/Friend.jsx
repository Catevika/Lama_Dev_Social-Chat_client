import './friend.css';

export default function Friends({ user }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<li className='sidebar-friend'>
			<img
				src={serverPublic + 'Person/' + user.profilePicture}
				alt=''
				className='sidebar-friend-img'
			/>
			<span>
				<b>{user.username}</b>
			</span>
		</li>
	);
}
