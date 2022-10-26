import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import moment from 'moment';
import { MoreVert } from '@mui/icons-material';
import './post.css';

export default function Post({ post }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const { user: currentUser } = useContext(AuthContext);

	const [user, setuser] = useState({});

	const [like, setLike] = useState(post.like.length);
	const [isLiked, setIsLiked] = useState(false);
	const [love, setLove] = useState(post.love.length);
	const [isLoved, setIsLoved] = useState(false);

	useEffect(() => {
		setIsLiked(post.like.includes(currentUser._id));
	}, [currentUser._id, post.like]);

	useEffect(() => {
		const fetchUser = async () => {
			const { data } = await axios.get(`/users?userId=${post.userId}`);
			setuser(data);
		};
		fetchUser();
	}, [post.userId]);

	const handleLike = () => {
		try {
			axios.put('/posts/' + post._id + '/like', { userId: currentUser._id });
		} catch (error) {
			console.log(error);
		}
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	const handleLove = () => {
		try {
			axios.put('/posts/' + post._id + '/love', { userId: currentUser._id });
		} catch (error) {
			console.log(error);
		}
		setLove(isLoved ? love - 1 : love + 1);
		setIsLoved(!isLoved);
	};

	return (
		<div className='post-container'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<Link to={`/posts/profile/${user._id}`}>
							<img
								src={
									post.postAuthorPicture
										? serverPublic + 'Person/' + post.postAuthorPicture
										: serverPublic + 'Person/defaultProfile.png'
								}
								alt=''
								className='post-profile-img'
							/>
						</Link>
						<div className='post-img-bottom'>
							<span className='post-username'>{post.postAuthor}</span>
							<span className='post-date'>
								{moment(post.createdAt).fromNow()}
							</span>
						</div>
					</div>
					<div className='post-top-right'>
						<MoreVert />
					</div>
				</div>
				<div className='post-center'>
					<img
						src={serverPublic + 'Post/' + post.img}
						alt=''
						className='post-img'
					/>
					<span className='post-text'>{post?.description}</span>
				</div>
				<div className='post-bottom'>
					<div className='post-bottom-left'>
						<img
							src={serverPublic + 'like.png'}
							alt=''
							className='post-bottom-left-icon'
							onClick={handleLike}
						/>
						<b>{like}</b>
						<img
							src={serverPublic + 'heart.png'}
							alt=''
							className='post-bottom-left-icon'
							onClick={handleLove}
						/>
						<b>{love}</b>
					</div>
					{/* <div className='post-bottom-right'>
						<span className='post-comment-counter'>
							{post.comment} comments
						</span>
					</div> */}
				</div>
			</div>
		</div>
	);
}
