import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@mui/icons-material';

export default function FollowButton({ user }) {
	const { user: currentUser, dispatch } = useContext(AuthContext);
	const [isFollowing, setIsFollowing] = useState(
		currentUser.following.includes(user?._id)
	);

	const handleClick = async () => {
		try {
			if (isFollowing) {
				await axios.put(`/users/${user._id}/unfollow`, {
					userId: currentUser._id
				});
				dispatch({ type: 'UNFOLLOW', payload: user._id });
			} else {
				await axios.put(`/users/${user._id}/follow`, {
					userId: currentUser._id
				});
				dispatch({ type: 'FOLLOW', payload: user._id });
			}
			setIsFollowing(!isFollowing);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{user._id !== currentUser._id ? (
				<button onClick={handleClick} className='rightbar-follow-button'>
					{isFollowing ? 'Unfollow' : 'Follow'}{' '}
					{isFollowing ? (
						<Remove className='rightbar-follow-button-icon' />
					) : (
						<Add className='rightbar-follow-button-icon' />
					)}
				</button>
			) : null}
		</>
	);
}
