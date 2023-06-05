import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './src/components/navBar/navBar';
import './style.css';

createRoot(document.getElementById('app')).render(
	<div>
		<BrowserRouter>
			<NavBar />
			<Routes>{/* <Route path="/" element="" /> */}</Routes>
		</BrowserRouter>
	</div>
);
