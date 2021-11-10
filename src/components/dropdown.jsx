import { useState } from 'react'

import { ReactComponent as CheckIcon } from '../assets/shared/icon-check.svg'
import { ReactComponent as ArrowUpIcon } from '../assets/shared/icon-arrow-up.svg'
import { ReactComponent as ArrowDownIcon } from '../assets/shared/icon-arrow-down.svg'

import './dropdown.scss'

const data = [
	{ id: 0, name: 'Most Upvotes' },
	{ id: 1, name: 'Least Upvotes' },
	{ id: 2, name: 'Most Comments' },
	{ id: 3, name: 'Least Comments' },
]

const Dropdown = () => {
	const [isOpen, setOpen] = useState(false)
	const [selectedId, setSelectedId] = useState(null)

	const toggle = () => setOpen(!isOpen)

	const handleItemClick = (id) => {
		selectedId && selectedId === id ? setSelectedId(null) : setSelectedId(id)
	}

	return (
		<div className='dropdown' onClick={toggle}>
			<div className='dropdown__label'>
				<span>
					Sort by:{' '}
					<b>
						{selectedId
							? data.find((item) => item.id === selectedId).name
							: 'Most Upvotes'}
					</b>
				</span>
				{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
			</div>

			{isOpen ? (
				<ul className='dropdown__list'>
					{data.map((item, index) => (
						<li
							key={index}
							id={item.id}
							className={selectedId === index ? 'active' : ''}
							onClick={() => handleItemClick(index)}
						>
							<span>{item.name}</span>
							{selectedId === item.id && <CheckIcon />}
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default Dropdown
