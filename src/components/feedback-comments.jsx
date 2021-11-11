import Comment from './comment'
import CommentAdd from './comment-add'
import './feedback-comments.scss'

const FeedbackComments = ({ comments }) => {
	return (
		<>
			<div className='comments'>
				<h3>{comments.length} Comments</h3>
				{comments.map((comment, idx) => (
					<Comment key={idx} {...comment} />
				))}
			</div>
			<CommentAdd />
		</>
	)
}

export default FeedbackComments
