import Post from '../post/Post';
import SharePost from '../sharePost/SharePost';
import './feed.css';
import { Posts } from '../../dummyData';

export default function Feed() {
	return (
		<div className='feed-container'>
			<div className='feed-wrapper'>
				<SharePost />
				{Posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
