import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { MoreVert } from '@mui/icons-material';
import './post.css';

export default function Post({ post }) {
	const [user, setUser] = useState({});
	const [like, setLike] = useState(post.like.length);
	const [isLiked, setIsLiked] = useState(false);
	const [love, setLove] = useState(post.love.length);
	const [isLoved, setIsLoved] = useState(false);

	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const handleLike = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	const handleLove = () => {
		setLove(isLoved ? love - 1 : love + 1);
		setIsLoved(!isLoved);
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(`/users?id=${post.userId}`);
				setUser(data);
			} catch (error) {
				console.log({ messsage: error.message });
			}
		};
		fetchUser();
	}, [post.userId]);

	return (
		<div className='post-container'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top-left'>
						<Link to={`/posts/profile/${user.username}`}>
							<img
								src={
									serverPublic + 'Person/' + user.profilePicture ||
									serverPublic + 'Person/defaultProfile.png'
								}
								alt=''
								className='post-profile-img'
							/>
						</Link>
						<div className='post-img-bottom'>
							<span className='post-username'>{user.username}</span>
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
