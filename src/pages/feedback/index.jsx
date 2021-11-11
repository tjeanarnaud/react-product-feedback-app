import './index.scss'

import Sidebar from '../../components/sidebar'
import Feedback from '../../components/feedback'
import FeedbackNav from '../../components/feedback-nav'
import FeedbackEmpty from '../../components/feedback-empty'
import { useRequests } from '../../contexts/RequestsContext'
import { Link } from 'react-router-dom'

const Home = () => {
	const data = useRequests()

	return (
		<div className='home'>
			<Sidebar status={data.status} />
			<div className='home-content'>
				<FeedbackNav count={data.productRequests} />
				{data.productRequests.length > 0 ? (
					data.productRequests.map(({ id, ...props }, idx) => (
						<Link to={`/feedback/detail/${id}`}>
							<Feedback key={idx} {...props} />
						</Link>
					))
				) : (
					<FeedbackEmpty />
				)}
			</div>
		</div>
	)
}

export default Home
