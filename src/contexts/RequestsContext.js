import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const RequestsContext = React.createContext()

export function useRequests() {
	return useContext(RequestsContext)
}

export function RequestsProvider({ children }) {
	const initialState = {
		currentUser: {},
		productRequests: [],
		status: {
			planned: 0,
			'in-progress': 0,
			live: 0,
		},
	}

	const [state, setState] = useState(initialState)

	const getData = () => {
		axios
			.get('./data.json')
			.then((res) => {
				setState({
					currentUser: res.data.currentUser,
					productRequests: res.data.productRequests,
					status: {
						planned: res.data.productRequests.filter((request) =>
							request.status.includes('suggestion')
						),
						'in-progress': res.data.productRequests.filter((request) =>
							request.status.includes('in-progress')
						),
						live: res.data.productRequests.filter((request) =>
							request.status.includes('live')
						),
					},
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<RequestsContext.Provider value={state}>
			{children}
		</RequestsContext.Provider>
	)
}
