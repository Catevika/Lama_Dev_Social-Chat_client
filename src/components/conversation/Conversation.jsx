import axios from 'axios';
import { useEffect, useState } from 'react';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const [friend, setFriend] = useState({});

	useEffect(() => {
		const getFriend = async () => {
			try {
				const friendId = conversation.members.filter(
					(id) => id !== currentUser._id
				);
				const { data } = await axios.get(`/users?userId=${friendId}`);
				setFriend(data);
			} catch (error) {
				console.log(error);
			}
		};
		getFriend();
	}, [conversation.members, currentUser._id]);

	return (
		<div className='conversation-container'>
			<img
				src={
					friend?.profilePicture
						? serverPublic + 'Person/' + friend.profilePicture
						: serverPublic + 'Person/defaultProfile.png'
				}
				alt=''
				className='conversation-img'
			/>
			<span className='conversation-name'>{friend?.username}</span>
		</div>
	);
}
