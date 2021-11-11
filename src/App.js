import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { RequestsProvider } from './contexts/RequestsContext'

import Home from './pages/feedback/index'
import Roadmap from './pages/roadmap'
import FeedbackNew from './pages/feedback/new'
import FeedbackEdit from './pages/feedback/edit'
import FeedbackDetail from './pages/feedback/detail'

function App() {
	return (
		<>
			<BrowserRouter>
				<RequestsProvider>
					<Routes>
						<Route path='/' element={<Home />} exact />
						<Route path='/roadmap' element={<Roadmap />} />
						<Route path='/feedback/new' element={<FeedbackNew />} />
						<Route path='/feedback/edit/:id' element={<FeedbackEdit />} />
						<Route path='/feedback/detail/:id' element={<FeedbackDetail />} />
						<Route
							path='/feedback/category/:category'
							element={<FeedbackDetail />}
						/>
					</Routes>
				</RequestsProvider>
			</BrowserRouter>
		</>
	)
}

export default App
