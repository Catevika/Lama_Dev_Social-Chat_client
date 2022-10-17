import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import './sharePost.css';

export default function SharePost() {
	return (
		<div className='share-container'>
			<div className='share-wrapper'>
				<div className='share-top'>
					<img src='/assets/person/0.jpg' alt='' className='share-img' />
					<input
						type='text'
						placeholder="What's in your mind?"
						className='share-input'
					/>
				</div>
				<div className='share-bottom'>
					<div className='share-options'>
						<div className='share-option'>
							<PermMedia htmlColor='mediumorchid' className='share-icon' />
							<span className='share-option-text'>Photo / Vidéo</span>
						</div>
						<div className='share-option'>
							<Label htmlColor='skyblue' className='share-icon' />
							<span className='share-option-text'>Tag</span>
						</div>
						<div className='share-option'>
							<Room htmlColor='coral' className='share-icon' />
							<span className='share-option-text'>Location</span>
						</div>
						<div className='share-option'>
							<EmojiEmotions htmlColor='goldenrod' className='share-icon' />
							<span className='share-option-text'>Feelings</span>
						</div>
						<button>Share</button>
					</div>
				</div>
			</div>
		</div>
	);
}
