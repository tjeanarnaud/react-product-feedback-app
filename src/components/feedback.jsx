import { Link } from 'react-router-dom'

import './feedback.scss'

import Upvote from './upvote'
import '../styles/components/button.scss'

import { ReactComponent as CommentsIcon } from '../assets/shared/icon-comments.svg'

const Feedback = ({ id, title, description, upvotes, category, comments }) => {
	return (
		<>
			<div className='feedback'>
				<Upvote upvotes={upvotes} />
				<div className='feedback__content'>
					<h3>{title}</h3>
					<p>{description}</p>
					<button className='badge'>{category}</button>
				</div>
				<div className='feedback__comment'>
					<CommentsIcon />
					<span>{comments?.length > 0 ? comments.length : 0}</span>
				</div>
			</div>
		</>
	)
}

export default Feedback
