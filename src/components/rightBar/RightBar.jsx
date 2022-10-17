import Online from '../online/Online';
import { Users } from '../../dummyData';
import './rightBar.css';

export default function RightBar() {
	return (
		<div className='rightbar-container'>
			<div className='rightbar-wrapper'>
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
			</div>
		</div>
	);
}
