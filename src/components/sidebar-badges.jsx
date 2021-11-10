import React from 'react'

import './sidebar-badges.scss'
import '../styles/components/badge.scss'

const SidebarBadges = () => {
	return (
		<div className='badges'>
			<button className='badge active'>All</button>
			<button className='badge'>UI</button>
			<button className='badge'>UX</button>
			<button className='badge'>Enhancement</button>
			<button className='badge'>Bug</button>
			<button className='badge'>Feature</button>
		</div>
	)
}

export default SidebarBadges
