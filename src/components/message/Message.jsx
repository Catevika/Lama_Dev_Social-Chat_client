import moment from 'moment';
import './message.css';

export default function Message({ message, own }) {
	return (
		<div className={own ? 'message-container own' : 'message-container'}>
			<div className='message-top'>
				<p className='message-text'>{message.text}</p>
			</div>
			<div className='message-bottom'>
				<em>{moment(message.createdAt).fromNow()}</em>
			</div>
		</div>
	);
}
