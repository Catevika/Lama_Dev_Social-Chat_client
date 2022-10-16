import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import './topBar.css';

export default function TopBar() {
	return (
		<header className='topbar-container'>
			<div className='topbar-left'>
				<span className='topbar-logo'>Catevika Social</span>
			</div>
			<div className='topbar-center'>
				<div className='topbar-search-bar'>
					<Search className='topbar-search-icon' />
					<input
						type='text'
						placeholder='Search for friends, posts or videos...'
					/>
				</div>
			</div>
			<nav className='topbar-right'>
				<ul className='topbar-links'>
					<li className='topbar-link'>Homepage</li>
					<li className='topbar-link'>Timeline</li>
				</ul>
				<div className='topbar-icons'>
					<div className='topbar-icon-item'>
						<Person />
						<span className='topbar-icon-badge'>1</span>
					</div>
					<div className='topbar-icon-item'>
						<Chat />
						<span className='topbar-icon-badge'>2</span>
					</div>
					<div className='topbar-icon-item'>
						<Notifications />
						<span className='topbar-icon-badge'>1</span>
					</div>
				</div>
				<img src='/assets/Person/0.png' alt='' className='topbar-img' />
			</nav>
		</header>
	);
}
