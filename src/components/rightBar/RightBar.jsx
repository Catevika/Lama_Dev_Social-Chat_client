import Online from '../online/Online';
import { Users } from '../../dummyData';
import './rightBar.css';

export default function RightBar({ profile }) {
	const HomeRightBar = () => {
		return (
			<>
				<div className='rightbar-birthday-container'>
					<img
						src='/assets/gift.png'
						alt=''
						className='rightbar-birthday-img'
					/>
					<span className='rightbar-birthday-text'>
						Birthday of <b>Jane Doe</b> and <b>3 other friends</b>
					</span>
				</div>
				<img src='/assets/ad.png' alt='' className='rightbar-ad-img' />
				<h4 className='rightbar-title'>
					<b>Online Friends</b>
				</h4>
				<ul className='rightbar-friend-list'>
					{Users.map((user) => (
						<Online key={user.id} user={user} />
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
						<span className='rightbar-info-value'>Paris</span>
					</div>
					<div className='rightbar-profile-info'>
						<span className='rightbar-info-key'>From: </span>
						<span className='rightbar-info-value'>France</span>
					</div>
					<div className='rightbar-profile-info'>
						<span className='rightbar-info-key'>Relationship: </span>
						<span className='rightbar-info-value'>Married</span>
					</div>
				</div>
				<div className='rightbar-profile-friends'>
					<h4 className='rightbar-profile-title'>User Friends</h4>
					<div className='rightbar-following'>
						<div className='rightbar-following-contact'>
							<img
								src='/assets/Person/2.jpeg'
								alt=''
								className='rightbar-following-contact-img'
							/>
							<span className='rightbar-following-contact-name'>John Doe</span>
						</div>
						<div className='rightbar-following-contact'>
							<img
								src='/assets/Person/3.jpeg'
								alt=''
								className='rightbar-following-contact-img'
							/>
							<span className='rightbar-following-contact-name'>John Doe</span>
						</div>
						<div className='rightbar-following-contact'>
							<img
								src='/assets/Person/4.jpeg'
								alt=''
								className='rightbar-following-contact-img'
							/>
							<span className='rightbar-following-contact-name'>John Doe</span>
						</div>
						<div className='rightbar-following-contact'>
							<img
								src='/assets/Person/5.jpeg'
								alt=''
								className='rightbar-following-contact-img'
							/>
							<span className='rightbar-following-contact-name'>John Doe</span>
						</div>
						<div className='rightbar-following-contact'>
							<img
								src='/assets/Person/6.jpeg'
								alt=''
								className='rightbar-following-contact-img'
							/>
							<span className='rightbar-following-contact-name'>John Doe</span>
						</div>
						<div className='rightbar-following-contact'>
							<img
								src='/assets/Person/7.jpeg'
								alt=''
								className='rightbar-following-contact-img'
							/>
							<span className='rightbar-following-contact-name'>John Doe</span>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className='rightbar-container'>
			<div className='rightbar-wrapper'>
				{profile ? <ProfileRightBar /> : <HomeRightBar />}
			</div>
		</div>
	);
}
