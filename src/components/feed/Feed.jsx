import Post from '../post/Post';
import SharePost from '../sharePost/SharePost';
import './feed.css';

export default function Feed() {
	return (
		<div className='feed-container'>
			<div className='feed-wrapper'>
				<SharePost />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}
