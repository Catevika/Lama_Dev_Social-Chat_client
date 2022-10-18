import TopBar from '../../components/topBar/TopBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import './profile.css';

export default function Profile() {
	return (
		<>
			<TopBar />
			<main className='profile-container'>
				<SideBar />
				<div className='profile-right'>
					<div className='profile-right-top'>
						<div className='profile-cover'>
							<img
								src='/assets/Post/0.jpg'
								alt=''
								className='profile-cover-img'
							/>
							<img
								src='/assets/Person/0.jpg'
								alt=''
								className='profile-user-img'
							/>
						</div>
						<div className='profile-info'>
							<h4 className='profile-info-name'>Catevika</h4>
							<span className='profile-info-desc'>Hello my friends!</span>
						</div>
					</div>
					<div className='profile-right-bottom'>
						<Feed />
						<RightBar profile />
					</div>
				</div>
			</main>
		</>
	);
}
