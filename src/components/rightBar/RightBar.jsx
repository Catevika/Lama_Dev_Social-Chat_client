import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
// import { Users } from '../../dummyData';
import FriendList from '../friendList/FriendList';
import './rightBar.css';
import FollowButton from '../followButton/FollowButton';

export default function RightBar({ user }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const { user: currentUser } = useContext(AuthContext);

	const HomeRightBar = () => {
		return (
			<>
				<div className='rightbar-birthday-container'>
					<img
						src={serverPublic + 'gift.png'}
						alt=''
						className='rightbar-birthday-img'
					/>
					<span className='rightbar-birthday-text'>
						Birthday of <strong>Jane Doe</strong> and{' '}
						<strong>3 other friends</strong>
					</span>
				</div>
				<img
					src={serverPublic + '/Person/0.jpg'}
					alt=''
					className='rightbar-ad-img'
				/>
				<div>
					<a
						href='https://github.com/Catevika'
						rel='noreferrer'
						target='_blank'
					>
						Catevika on Github
					</a>
				</div>
				{
					<div className='rightbar-friend-list'>
						<FriendList user={currentUser} />
					</div>
				}
			</>
		);
	};

	const ProfileRightBar = () => {
		return (
			<>
				{user ? <FollowButton user={user} /> : null}
				<div className='rightbar-profile-container'>
					<h4 className='rightbar-profile-title'>Information</h4>
					<div className='rightbar-profile-info'>
						<span className='rightbar-info-key'>City: </span>
						<span className='rightbar-info-value'>{user.city}</span>
					</div>
					<div className='rightbar-profile-info'>
						<span className='rightbar-info-key'>From: </span>
						<span className='rightbar-info-value'>{user.from}</span>
					</div>
					<div className='rightbar-profile-info'>
						<span className='rightbar-info-key'>Relationship: </span>
						<span className='rightbar-info-value'>
							{user.relationship === 1
								? 'Single'
								: user.relationship === 2
								? 'In relationship'
								: 'Married'}
						</span>
					</div>
				</div>
				<FriendList user={user} />
			</>
		);
	};

	return (
		<div className='rightbar-container'>
			<div className='rightbar-wrapper'>
				{user ? <ProfileRightBar /> : <HomeRightBar />}
			</div>
		</div>
	);
}
