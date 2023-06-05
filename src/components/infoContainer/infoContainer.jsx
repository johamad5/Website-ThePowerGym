import React from 'react';
import InfoItem from '../infoItem/infoItem';
import './infoContainer.css';

function InfoContainer() {
	return (
		<div className="itemsContainer">
			<InfoItem
				icon="phone"
				text="2202-0202"
				subText="CALL US DURING WORKING HOURS"
			/>
			<InfoItem
				icon="location"
				text="Calle 123"
				subText="LA BLANQUEADA | MONTEVIDEO"
			/>
			<InfoItem
				icon="clock"
				text="L-V  09:00 - 22:00"
				subText="WORKING HOURS"
			/>
		</div>
	);
}

export default InfoContainer;
