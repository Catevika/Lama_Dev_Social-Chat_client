import { MoreVert } from '@mui/icons-material';
import './post.css';

export default function Post() {
	return (
		<div className='post-container'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<img
							src='/assets/person/0.png'
							alt=''
							className='post-profile-img'
						/>
						<div className='post-img-bottom'>
							<span className='post-username'>Catevika</span>
							<span className='post-date'>5 mins ago</span>
						</div>
					</div>
					<div className='post-top-right'>
						<MoreVert />
					</div>
				</div>
				<div className='post-center'>
					<img src='/assets/post/1.jpeg' alt='' className='post-img' />
					<span className='post-text'>Hey here is my 1st post!</span>
				</div>
				<div className='post-bottom'>
					<div className='post-bottom-left'>
						<img
							src='/assets/like.png'
							alt=''
							className='post-bottom-left-icon'
						/>
						<img
							src='/assets/heart.png'
							alt=''
							className='post-bottom-left-icon'
						/>
						<span className='post-like-counter'>32 people like it</span>
					</div>
					<div className='post-bottom-right'>
						<span className='post-comment-counter'>9 comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}
