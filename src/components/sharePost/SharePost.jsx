import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import {
	EmojiEmotions,
	Label,
	PermMedia,
	Room,
	ClearRounded
} from '@mui/icons-material';
import './sharePost.css';

export default function SharePost() {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const description = useRef();
	const [file, setFile] = useState(null);

	// Reset Post Share
	const resetShare = () => {
		setFile(null);
		description.current.value = '';
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			postAuthor: user.username,
			description: description.current.value,
			postAuthorPicture: user.profilePicture
		};

		if (file) {
			const data = new FormData();
			const fileName = Date.now() + file.name;
			data.append('name', fileName);
			data.append('file', file);
			newPost.img = fileName;

			try {
				await axios.post('/upload', data);
			} catch (error) {
				console.log(error);
			}
		}

		try {
			await axios.post('/posts', newPost);
			resetShare();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='share-container'>
				<div className='share-wrapper'>
					<div className='share-top'>
						<img
							src={
								user.profilePicture
									? serverPublic + 'Person/' + user.profilePicture
									: serverPublic + 'Person/defaultProfile.png'
							}
							alt=''
							className='share-img'
						/>
						<input
							type='text'
							placeholder={"What's in your mind " + user.username + '?'}
							className='share-input'
							ref={description}
						/>
					</div>
					{file && (
						<div className='preview-image'>
							<img src={URL.createObjectURL(file)} alt='' />
							<ClearRounded
								className='preview-icon'
								onClick={() => setFile(null)}
							/>
						</div>
					)}
					<form className='share-bottom' onSubmit={handleSubmit}>
						<div className='share-options'>
							<label htmlFor='file' className='share-option'>
								<PermMedia htmlColor='mediumorchid' className='share-icon' />
								<span className='share-option-text'>Photo</span>
								<input
									type='file'
									name='file'
									id='file'
									accept='.png, .jpeg, .jpg'
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: 'none' }}
								/>
							</label>
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
							<button type='submit'>Share</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
