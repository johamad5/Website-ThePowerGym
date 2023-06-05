import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './src/components/navBar/navBar';
import FrontPage from './src/pages/frontPage/frontPage';
import './style.css';

createRoot(document.getElementById('app')).render(
	<div>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<FrontPage />} />
			</Routes>
		</BrowserRouter>
	</div>
);
