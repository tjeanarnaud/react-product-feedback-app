import { Link } from 'react-router-dom'

import './feedback-empty.scss'
import '../styles/components/button.scss'

import { ReactComponent as IllustrationEmptyIcon } from '../assets/suggestions/illustration-empty.svg'
import { ReactComponent as PlusIcon } from '../assets/shared/icon-plus.svg'

const FeedbackEmpty = () => {
	return (
		<div className='feedback-empty'>
			<section>
				<IllustrationEmptyIcon />
				<h1>There is no feedback yet.</h1>
				<p>
					Got a suggestion? Found a bug that needs to be squashed? We love
					hearing about new ideas to improve our app.
				</p>
				<Link to='/feedback/new' className='btn btn-default'>
					<PlusIcon /> Add Feedback
				</Link>
			</section>
		</div>
	)
}

export default FeedbackEmpty
