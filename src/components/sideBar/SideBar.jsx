// import { Users } from '../../dummyData';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import People from '../people/People';
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
	const { user } = useContext(AuthContext);

	const [people, setPeople] = useState([]);

	useEffect(() => {
		const getPeople = async () => {
			try {
				const { data } = await axios.get('/users/all');
				const peopleButFriends = data.filter(
					(person) =>
						person._id !== user._id && !user.following.includes(person._id)
				);
				setPeople(peopleButFriends);
			} catch (error) {
				console.log(error);
			}
		};
		getPeople();
	}, [user._id, user.following]);

	return (
		<div className='sideBar-container'>
			<div className='sidebar-wrapper'>
				<nav className='sidebar-list'>
					<Link to='/' className='sidebar-list-item'>
						<RssFeed className='sidebar-icon-linked' />
						<span className='sidebar-list-item-text'>
							<strong>Feed</strong>
						</span>
					</Link>
					<Link to='/messenger' className='sidebar-list-item'>
						<Chat className='sidebar-icon-linked' />
						<span className='sidebar-list-item-text'>
							<strong>Chats</strong>
						</span>
					</Link>
					<p className='sidebar-list-item'>
						<PlayCircleFilledOutlined className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Videos</span>
					</p>
					<p className='sidebar-list-item'>
						<Group className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Groups</span>
					</p>
					<p className='sidebar-list-item'>
						<Bookmark className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Bookmarks</span>
					</p>
					<p className='sidebar-list-item'>
						<HelpOutline className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Questions</span>
					</p>
					<p className='sidebar-list-item'>
						<WorkOutline className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Jobs</span>
					</p>
					<p className='sidebar-list-item'>
						<Event className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Events</span>
					</p>
					<p className='sidebar-list-item'>
						<School className='sidebar-icon' />
						<span className='sidebar-list-item-text'>Courses</span>
					</p>
				</nav>
				<button className='sidebar-false-btn'>Show More</button>
				<h4 className='sidebar-title'>
					<strong>People around:</strong>
				</h4>
				<div className='sidebar-people-list'>
					{people.map((person) => (
						<People key={person._id} person={person} />
					))}
				</div>
			</div>
		</div>
	);
}
