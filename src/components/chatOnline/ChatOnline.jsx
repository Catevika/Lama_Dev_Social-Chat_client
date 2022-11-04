import axios from 'axios';
import { useEffect, useState } from 'react';
import './chatOnline.css';

export default function ChatOnline({
	onlineUsers,
	currentUserId,
	setCurrentChat
}) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const [friends, setFriends] = useState([]);
	const [onlineFriends, setOnlineFriends] = useState([]);

	useEffect(() => {
		const getFriends = async () => {
			const { data } = await axios.get(`/users/friends/${currentUserId}`);
			setFriends(data);
		};
		getFriends();
	}, [currentUserId]);

	useEffect(() => {
		setOnlineFriends(
			friends.filter((friend) => onlineUsers.includes(friend._id))
		);
	}, [friends, onlineUsers]);

	const handleClick = async (user) => {
		try {
			const { data } = await axios.get(
				`/conversations/find/${currentUserId}/${user._id}`
			);
			setCurrentChat(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='chat-online-container'>
			{onlineFriends.map((onlineFriend) => (
				<div key={onlineFriend._id}>
					<div
						className='chat_online-friend'
						onClick={() => handleClick(onlineFriend)}
					>
						<div className='chat-online-friend-wrapper'>
							<img
								src={
									onlineFriend.profilePicture
										? serverPublic + 'Person/' + onlineFriend.profilePicture
										: serverPublic + 'Person/defaultProfile.png'
								}
								alt=''
								className='chat-online-img'
							/>
							<span className='chat-online-badge'></span>
						</div>
					</div>
					<span className='chat-online-name'>{onlineFriend.username}</span>
				</div>
			))}
		</div>
	);
}
