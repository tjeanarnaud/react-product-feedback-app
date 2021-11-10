import React from 'react'
import { Link } from 'react-router-dom'

import './feedback-nav.scss'

import { ReactComponent as SuggestionsIcon } from '../assets/suggestions/icon-suggestions.svg'
import { ReactComponent as PlusIcon } from '../assets/shared/icon-plus.svg'
import Dropdown from './dropdown'

const FeedbackNav = ({ children }) => {
	return (
		<div className='nav'>
			<div>
				<SuggestionsIcon />
				<h3>6 Suggestions</h3>
				<Dropdown />
			</div>
			<Link to='/feedback/new' className='btn btn-default'>
				<PlusIcon /> Add Feedback
			</Link>
		</div>
	)
}

export default FeedbackNav
