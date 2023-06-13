import React from 'react';
import { useSelector } from 'react-redux';

import './ListContainer.css';

const trimString = string => {
	if (string.length === 0) {
		return false;
	} else {
		return string.substr(0, 10) + '...';
	}
};

const ListContainer = props => {
	const searchResults = useSelector(state => state.search.searchResults);
	const searchList = searchResults.map(result => {
		return (
			<li key={result.id}>
				<div className='search-list'>
					<div className='image-container'>
						<div className='image-span-class'></div>
					</div>
					<div className='property-details'>
						<span className='porperty-name'>{trimString(result.label)}</span>
						<div className='property-detail-one'>
							<span className='porperty-sqft'>2,834sq ft</span>
							<span className='property-price'>$302k</span>
						</div>
						<span className='property-type'>Office</span>
					</div>
				</div>
			</li>
		);
	});

	return (
		<React.Fragment>
			<div className='search-list-container'>
				<span className='search-heading'>Search Results</span>
				<div className='search-results-container'>
					{
            searchList.length > 0 
              ? <ul className='search-results-list'>{searchList}</ul>
              : <span className='seach-no-results'>No Results Found!</span>
          }
				</div>
			</div>
		</React.Fragment>
	);
};

export default ListContainer;
