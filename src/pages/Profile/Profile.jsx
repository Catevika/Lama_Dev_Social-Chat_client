import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../../components/topBar/TopBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import './profile.css';

export default function Profile() {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const params = useParams();
	const username = params.username;

	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(`/users?username=${username}`);
				setUser(data);
			} catch (error) {
				console.log({ messsage: error.message });
			}
		};
		fetchUser();
	}, [username]);

	return (
		<>
			<TopBar />
			<main className='profile-container'>
				<SideBar />
				<div className='profile-right'>
					<div className='profile-right-top'>
						<div className='profile-cover'>
							<img
								src={
									serverPublic + 'Post/' + user.coverPicture ||
									serverPublic + 'Person/defaultCover.jpg'
								}
								alt=''
								className='profile-cover-img'
							/>
							<img
								src={
									serverPublic + 'Person/' + user.profilePicture ||
									serverPublic + 'Person/defaultProfile.png'
								}
								alt=''
								className='profile-user-img'
							/>
						</div>
						<div className='profile-info'>
							<h4 className='profile-info-name'>{username}</h4>
							<span className='profile-info-desc'>{user.description}</span>
						</div>
					</div>
					<div className='profile-right-bottom'>
						<Feed username={username} />
						<RightBar user={user} />
					</div>
				</div>
			</main>
		</>
	);
}
