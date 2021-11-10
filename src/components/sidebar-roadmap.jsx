import { Link } from 'react-router-dom'

import './sidebar-roadmap.scss'

const SidebarRoadmap = () => {
	return (
		<div className='roadmap'>
			<section>
				<h3>Roadmap</h3>
				<Link to='/roadmap'>View</Link>
			</section>

			<ul>
				<li>
					<span>Planned</span>
					<span>2</span>
				</li>
				<li>
					<span>In-Progress</span>
					<span>3</span>
				</li>
				<li>
					<span>Live</span>
					<span>1</span>
				</li>
			</ul>
		</div>
	)
}

export default SidebarRoadmap
