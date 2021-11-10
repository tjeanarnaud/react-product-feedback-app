import './index.scss'

import Sidebar from '../components/sidebar'
import Feedback from '../components/feedback'
import FeedbackNav from '../components/feedback-nav'
import FeedbackEmpty from '../components/feedback-empty'
import { useRequests } from '../contexts/RequestsContext'

const Index = () => {
	const data = useRequests()

	return (
		<div className='page'>
			<Sidebar status={data.status} />
			<div className='main'>
				<FeedbackNav count={data.productRequests} />
				{data.productRequests.length > 0 ? (
					data.productRequests.map(({ ...props }, idx) => (
						<Feedback key={idx} {...props} />
					))
				) : (
					<FeedbackEmpty />
				)}
			</div>
		</div>
	)
}

export default Index
