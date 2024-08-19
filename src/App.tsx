import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ListPage from './pages/ReviewersList/page'
import ApplyPage from './pages/ApplyReviewer/page'
import UpdatePage from './pages/UpdateInfo/page'

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<div className="h-6"></div>
				<Routes>
					<Route path="/" element={<ListPage />} />
					<Route path="/list" element={<ListPage />} />
					<Route path="/apply" element={<ApplyPage />} />
					<Route path="/update" element={<UpdatePage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
