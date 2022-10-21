import Online from '../online/Online';
import { Users } from '../../dummyData';
import './rightBar.css';

export default function RightBar({ user }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

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
						Birthday of <b>Jane Doe</b> and <b>3 other friends</b>
					</span>
				</div>
				<img src={serverPublic + 'ad.png'} alt='' className='rightbar-ad-img' />
				<h4 className='rightbar-title'>
					<b>Online Friends</b>
				</h4>
				<ul className='rightbar-friend-list'>
					{Users.map((dummyUser) => (
						<Online key={dummyUser.id} user={dummyUser} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightBar = () => {
		return (
			<>
				<div className='rightbar-profile-container'>
					<h4 className='rightbar-profile-title'>User Information</h4>
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
				<div className='rightbar-profile-friends'>
					<h4 className='rightbar-profile-title'>User Friends</h4>
					<div className='rightbar-following'>
						{Users.map((user) => (
							<div key={user.id} className='rightbar-following-contact'>
								<img
									src={serverPublic + 'Person/' + user.profilePicture}
									alt=''
									className='rightbar-following-contact-img'
								/>
								<span className='rightbar-following-contact-name'>
									{user.username}
								</span>
							</div>
						))}
					</div>
				</div>
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
