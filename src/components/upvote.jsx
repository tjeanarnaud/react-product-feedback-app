import './upvote.scss'

import { ReactComponent as ArrowUpIcon } from '../assets/shared/icon-arrow-up.svg'

const Upvote = ({ upvotes }) => {
	return (
		<button className='upvote'>
			<ArrowUpIcon />
			<div>{upvotes}</div>
		</button>
	)
}

export default Upvote
