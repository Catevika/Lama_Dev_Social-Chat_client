import TopBar from '../../components/topBar/TopBar';
import SideBar from '../../components/sideBar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import './home.css';

export default function homepage() {
	return (
		<>
			<TopBar />
			<main className='home-container'>
				<SideBar />
				<Feed />
				<RightBar />
			</main>
		</>
	);
}
