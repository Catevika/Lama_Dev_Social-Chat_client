import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import SharePost from '../sharePost/SharePost';
import Post from '../post/Post';
import './feed.css';

export default function Feed({ profileId }) {
	const [posts, setPosts] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = profileId
				? await axios.get(`/posts/profile/${profileId}`)
				: await axios.get(`/posts/timeline/${user._id}`);
			setPosts(data);
		};
		fetchPosts();
	}, [profileId, user._id]);

	return (
		<div className='feed-container'>
			<SharePost />
			{posts ? (
				<div className='feed-wrapper'>
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			) : (
				<div className='feed-wrapper'>No post available yet</div>
			)}
		</div>
	);
}
