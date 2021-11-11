import { Link } from 'react-router-dom'

import './sidebar.scss'
import '../styles/components/badge.scss'

const Sidebar = ({ status }) => {
	return (
		<div className='home-sidebar'>
			<div className='home-sidebar__header'>
				<h2>Frontend Mentor</h2>
				<span>Feedback Board</span>
			</div>

			<div className='home-sidebar__section_one'>
				<button className='badge active'>All</button>
				<button className='badge'>UI</button>
				<button className='badge'>UX</button>
				<button className='badge'>Enhancement</button>
				<button className='badge'>Bug</button>
				<button className='badge'>Feature</button>
			</div>

			<div className='home-sidebar__section_two'>
				<header>
					<h3>Roadmap</h3>
					<Link to='/roadmap'>View</Link>
				</header>
				<ul>
					<li>
						<span>Planned</span>
						<span>{status.planned.length}</span>
					</li>
					<li>
						<span>In-Progress</span>
						<span>{status['in-progress'].length}</span>
					</li>
					<li>
						<span>Live</span>
						<span>{status.live.length}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
