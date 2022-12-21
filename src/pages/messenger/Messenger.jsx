import { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import Conversation from '../../components/conversation/Conversation';
import TopBar from '../../components/topBar/TopBar';
import Message from '../../components/message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';
import './messenger.css';
import { Chat, West } from '@mui/icons-material';
import { io } from 'socket.io-client';

export default function Messenger() {
	const { user } = useContext(AuthContext);
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [arrivingMessage, setArrivingMessage] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const socket = useRef();
	const scrollRef = useRef();

	useEffect(() => {
		// Allow only one connection even if the messenger page is refreshed
		socket.current = io('ws://localhost:8900'); // ws is for web socket
		socket.current.on('getMessage', (data) => {
			setArrivingMessage({
				senderId: data.senderId,
				text: data.text,
				createdAt: Date.now()
			});
		});
	}, []);

	useEffect(() => {
		arrivingMessage &&
			currentChat?.members.includes(arrivingMessage.senderId) &&
			setMessages((prev) => [...prev, arrivingMessage]);
	}, [currentChat, arrivingMessage]);

	useEffect(() => {
		// send the current user id to the socket server
		socket.current.emit('addUser', user._id);
		socket.current.on('getUsers', (users) =>
			setOnlineUsers(
				user.following.filter((followingId) =>
					users.some((user) => user.userId === followingId)
				)
			)
		);
	}, [user]);

	useEffect(() => {
		const getConversations = async () => {
			try {
				const { data } = await axios.get(`/conversations/${user._id}`);
				setConversations(data);
			} catch (error) {
				console.log(error);
			}
		};
		getConversations();
	}, [user._id]);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const { data } = await axios.get(`/messages/${currentChat?._id}`);
				setMessages(data);
			} catch (error) {
				console.log(error);
			}
		};
		getMessages();
	}, [currentChat]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const message = {
			senderId: user._id,
			text: newMessage,
			conversationId: currentChat._id
		};

		const receiverId = currentChat.members.find(
			(memberId) => memberId !== user._id
		);

		socket.current.emit('sendMessage', {
			senderId: user._id,
			text: newMessage,
			receiverId
		});

		try {
			const { data } = await axios.post('/messages', message);
			setMessages([...messages, data]);
			setNewMessage('');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<>
			<TopBar />
			<div className='messenger-container'>
				<div className='chat-menu'>
					<div className='chat-menu-wrapper'>
						<input
							type='text'
							placeholder='Search for Friends'
							className='chat-menu-input'
						/>
						<div className='chat-menu-text'>Conversations with:</div>
						{conversations.map((conversation) => (
							<div
								key={conversation._id}
								onClick={() => setCurrentChat(conversation)}
							>
								<Conversation conversation={conversation} currentUser={user} />
							</div>
						))}
					</div>
				</div>
				<div className='chat-box'>
					<div className='chat-box-wrapper'>
						{currentChat ? (
							<>
								<div className='chat-box-top'>
									{messages.map((message) => (
										<div key={message._id} ref={scrollRef}>
											<Message
												message={message}
												own={message.senderId === user._id}
											/>
										</div>
									))}
								</div>
								<div className='chat-box-bottom'>
									<textarea
										value={newMessage}
										placeholder='New message...'
										className='chat-message-textarea'
										onChange={(e) => setNewMessage(e.target.value)}
									></textarea>
									<button
										className='chat-submit-button'
										type='submit'
										onClick={handleSubmit}
									>
										Send
									</button>
								</div>
							</>
						) : (
							<div className='no-conversation-text'>
								<span>
									<West /> Open a conversation to start a chat!
								</span>
								<Chat className='no-conversation-icon' />
							</div>
						)}
					</div>
				</div>
				<div className='chat-online'>
					<div className='chat-online-wrapper'>
						<ChatOnline
							key={currentChat?._id}
							onlineUsers={onlineUsers}
							currentUserId={user._id}
							setCurrentChat={setCurrentChat}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
