import { useState } from 'react';
import { Users } from '../../dummyData';
import { MoreVert } from '@mui/icons-material';
import './post.css';

export default function Post({ post }) {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);
	const [love, setLove] = useState(post.love);
	const [isLoved, setIsLoved] = useState(false);

	const handleLike = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};
	const handleLove = () => {
		setLove(isLoved ? love - 1 : love + 1);
		setIsLoved(!isLoved);
	};
	return (
		<div className='post-container'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<img
							src={
								Users.filter((user) => user.id === post.userId)[0]
									.profilePicture
							}
							alt=''
							className='post-profile-img'
						/>
						<div className='post-img-bottom'>
							<span className='post-username'>
								{Users.filter((user) => user.id === post.userId)[0].username}
							</span>
							<span className='post-date'>{post.date}</span>
						</div>
					</div>
					<div className='post-top-right'>
						<MoreVert />
					</div>
				</div>
				<div className='post-center'>
					<img src={post.photo} alt='' className='post-img' />
					<span className='post-text'>{post?.desc}</span>
				</div>
				<div className='post-bottom'>
					<div className='post-bottom-left'>
						<img
							src='/assets/like.png'
							alt=''
							className='post-bottom-left-icon'
							onClick={handleLike}
						/>
						<img
							src='/assets/heart.png'
							alt=''
							className='post-bottom-left-icon'
							onClick={handleLove}
						/>
						<span className='post-like-counter'>
							<b>Like:</b> {like} - <b>Love:</b> {love}
						</span>
					</div>
					<div className='post-bottom-right'>
						<span className='post-comment-counter'>
							{post.comment} comments
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
