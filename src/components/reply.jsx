import './reply.scss'

const Reply = ({ content, replyingTo, user }) => {
	return (
		<div className='reply'>
			<div className='reply-header'>
				<div
					className='reply-header__user_image'
					style={{
						backgroundImage: `url(https://randomuser.me/api/portraits/women/14.jpg)`,
					}}
					// style={{ backgroundImage: `url(${user.image})` }}
				></div>
				<div className='reply-header__user_info'>
					<h4>{user.name}</h4>
					<h4>{user.username}</h4>
				</div>
				<button className='reply-header__user_reply'>Reply</button>
			</div>
			<p className='reply-content body-2'>
				<span>@{replyingTo}</span>
				{content}
			</p>
		</div>
	)
}

export default Reply
