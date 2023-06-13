import React from 'react';

import './MapLayout.css';
import MapComponent from '../MapComponent/MapComponent';
import ListContainer from '../ListContainer/ListContainer';

const MapLayout = props => {
	return (
		<React.Fragment>
			<div className='map-layout-container'>
				<div className='list-view-container'>
          <ListContainer searchResults={[]} />
        </div>
				<div className='map-view-container'>
					<MapComponent />
				</div>
			</div>
		</React.Fragment>
	);
};

export default MapLayout;
