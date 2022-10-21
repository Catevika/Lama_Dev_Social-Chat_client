import { Users } from '../../dummyData';
import Friends from '../friend/Friend';
import {
	Bookmark,
	Chat,
	Event,
	Group,
	HelpOutline,
	PlayCircleFilledOutlined,
	RssFeed,
	School,
	WorkOutline
} from '@mui/icons-material';
import './sideBar.css';

export default function SideBar() {
	return (
		<div className='sideBar-container'>
			<div className='sidebar-wrapper'>
				<ul className='sidebar-list'>
					<li className='sidebar-list-item'>
						<RssFeed className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Feed</span>
					</li>
					<li className='sidebar-list-item'>
						<Chat className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Chats</span>
					</li>
					<li className='sidebar-list-item'>
						<PlayCircleFilledOutlined className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Videos</span>
					</li>
					<li className='sidebar-list-item'>
						<Group className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Groups</span>
					</li>
					<li className='sidebar-list-item'>
						<Bookmark className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Bookmarks</span>
					</li>
					<li className='sidebar-list-item'>
						<HelpOutline className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Questions</span>
					</li>
					<li className='sidebar-list-item'>
						<WorkOutline className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Jobs</span>
					</li>
					<li className='sidebar-list-item'>
						<Event className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Events</span>
					</li>
					<li className='sidebar-list-item'>
						<School className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Courses</span>
					</li>
				</ul>
				<button className='sidebar-btn'>Show More</button>
				<h4 className='sidebar-title'>
					<b>Friends</b>
				</h4>
				<ul className='sidebar-friend-list'>
					{Users.map((user) => (
						<Friends key={user.id} user={user} />
					))}
				</ul>
			</div>
		</div>
	);
}
