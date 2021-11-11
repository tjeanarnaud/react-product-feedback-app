import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useRequests } from '../../contexts/RequestsContext'

import { ReactComponent as ArrowLeftIcon } from '../../assets/shared/icon-arrow-left.svg'

import './detail.scss'
import '../../styles/components/button.scss'
import Feedback from '../../components/feedback'
import FeedbackComments from '../../components/feedback-comments'

const FeedbackDetail = () => {
	const { id } = useParams()
	const request = useRequests().productRequests[id]

	console.log(request)

	return (
		<div className='detail'>
			<div className='detail-header'>
				<Link to='/' className='btn btn-link'>
					<ArrowLeftIcon />
					Go Back
				</Link>
				<Link to={`/feedback/edit/${id}`} className='btn btn-blue'>
					Edit Feedback
				</Link>
			</div>
			<div className='detail-content'>
				<Feedback {...request} />
				<FeedbackComments comments={request.comments} />
			</div>
		</div>
	)
}

export default FeedbackDetail
