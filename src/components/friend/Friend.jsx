import './friend.css';

export default function Friends({ user }) {
	return (
		<li className='sidebar-friend'>
			<img src={user.profilePicture} alt='' className='sidebar-friend-img' />
			<span>
				<b>{user.username}</b>
			</span>
		</li>
	);
}
