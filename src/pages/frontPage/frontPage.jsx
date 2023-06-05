import React from 'react';
import InfoContainer from '../../components/infoContainer/infoContainer';
import './frontPage.css';

function FrontPage() {
	return (
		<>
			<div className="titleContainer">
				<div>
					<h1>THE POWER GYM</h1>
					<p className="legend">Your neighborhood gym</p>
				</div>
			</div>
			<InfoContainer />
		</>
	);
}

export default FrontPage;
