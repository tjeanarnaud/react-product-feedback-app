import { useState } from 'react'

import './comment-add.scss'
import '../styles/components/button.scss'
import '../styles/components/input.scss'

const CommentAdd = () => {
	const [charactersLeft, setCharactersLeft] = useState(255)

	const charactersCount = (event) => {
		setCharactersLeft(255 - event.length)
	}

	return (
		<div className='comment-add'>
			<h3>Add Comment</h3>
			<form>
				<textarea
					onChange={(e) => charactersCount(e.target.value)}
					placeholder='Type your comment here'
					cols='30'
					rows='2'
				></textarea>
				<div>
					<span>{charactersLeft} Characters left</span>
					<button type='submit' className='btn btn-default'>
						Post Comment
					</button>
				</div>
			</form>
		</div>
	)
}

export default CommentAdd
