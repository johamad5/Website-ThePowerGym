import React from 'react';
import './InfoItem.css';

function InfoItem({ icon, text, subText }) {
	return (
		<span className="cardInfo">
			<img className="infoImg" src={`./img/${icon}.png`} alt="icon" />
			<span className="infoInfo">
				<p className="infoSubText">{subText}</p>
				<p className="infoText">{text}</p>
			</span>
		</span>
	);
}

export default InfoItem;
