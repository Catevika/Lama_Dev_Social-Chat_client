import { useEffect, useState } from 'react';
import axios from 'axios';
import './friendList.css';
import { Link } from 'react-router-dom';

export default function FriendList({ user }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const getFriends = async () => {
			try {
				const { data } = await axios.get(`/users/friends/${user._id}`);
				setFriends(data);
			} catch (error) {
				console.log(error);
			}
		};
		getFriends();
	}, [user._id, user.following]);

	return (
		<div className='rightbar-profile-friends'>
			{friends.length ? (
				<>
					<h4 className='rightbar-profile-title'>Friends</h4>
					<div className='rightbar-following'>
						{friends.map((friend) => (
							<Link key={friend._id} to={`/posts/profile/${friend._id}`}>
								<div className='rightbar-following-contact'>
									<img
										src={
											friend.profilePicture
												? serverPublic + 'Person/' + friend.profilePicture
												: serverPublic + 'Person/defaultProfile.png'
										}
										alt=''
										className='rightbar-following-contact-img'
									/>
									<span className='rightbar-following-contact-name'>
										{friend.username}
									</span>
								</div>
							</Link>
						))}
					</div>
				</>
			) : (
				<span>
					<em>Friends will be listed here!</em>
				</span>
			)}
		</div>
	);
}
