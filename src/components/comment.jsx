import './comment.scss'
import Reply from './reply'

const Comment = ({ id, content, user, replies }) => {
	return (
		<div className='comment'>
			<div className='comment-header'>
				<div
					className='comment-header__user_image'
					style={{
						backgroundImage: `url(https://randomuser.me/api/portraits/women/11.jpg)`,
					}}
					// style={{ backgroundImage: `url(${user.image})` }}
				></div>
				<div className='comment-header__user_info'>
					<h4>{user.name}</h4>
					<h4>@{user.username}</h4>
				</div>
				<button className='comment-header__user_reply'>Reply</button>
			</div>
			<div
				className='comment-content'
				style={
					replies && { borderLeft: `1px solid var(--comment-border-bottom)` }
				}
			>
				<p className='body-2'>{content}</p>
			</div>
			{replies && replies.map((reply, idx) => <Reply key={idx} {...reply} />)}
		</div>
	)
}

export default Comment
