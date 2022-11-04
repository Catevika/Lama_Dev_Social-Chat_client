import { Link } from 'react-router-dom';
import '../sideBar/sideBar.css';

export default function People({ person }) {
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<Link to={`/posts/profile/${person._id}`}>
			<div className='sidebar-person'>
				<img
					src={
						person.profilePicture
							? serverPublic + 'Person/' + person.profilePicture
							: serverPublic + 'Person/defaultProfile.png'
					}
					alt=''
					className='sidebar-person-img'
				/>
				<span className='sidebar-person-name'>{person.username}</span>
			</div>
		</Link>
	);
}
