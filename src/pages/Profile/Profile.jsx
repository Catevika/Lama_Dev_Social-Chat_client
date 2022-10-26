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
	const profileId = params.profileId;

	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await axios.get(`/users?userId=${profileId}`);
				setUser(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUser();
	}, [profileId]);

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
									user.coverPicture
										? serverPublic + 'Post/' + user.coverPicture
										: serverPublic + 'Person/defaultCover.jpg'
								}
								alt=''
								className='profile-cover-img'
							/>
							<img
								src={
									user.profilePicture
										? serverPublic + 'Person/' + user.profilePicture
										: serverPublic + 'Person/defaultProfile.png'
								}
								alt=''
								className='profile-user-img'
							/>
						</div>
						<div className='profile-info'>
							<h4 className='profile-info-name'>{user.username}</h4>
							<span className='profile-info-desc'>{user.description}</span>
						</div>
					</div>
					<div className='profile-right-bottom'>
						<Feed profileId={profileId} />
						<RightBar user={user} />
					</div>
				</div>
			</main>
		</>
	);
}
