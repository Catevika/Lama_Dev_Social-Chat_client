import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import SharePost from '../sharePost/SharePost';
import './feed.css';

export default function Feed({ username }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = username
				? await axios.get(`/posts/profile/${username}`)
				: await axios.get(`/posts/timeline/634906a30368d0321a74d363`);
			setPosts(data);
		};
		fetchPosts();
	}, [username]);

	return (
		<div className='feed-container'>
			<SharePost />
			<div className='feed-wrapper'>
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
}
