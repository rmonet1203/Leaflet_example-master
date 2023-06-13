import React, { useState } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useDispatch } from 'react-redux';

import './SearchComponent.css';
import * as types from '../../store/constants';

const SearchComponent = props => {
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState();
	const [searchResults, setSearchResults] = useState([]);

	//USE THIS LAT AND LNG = 12.962977,77.7358291

	const searchInputChangeHandler = event => {
		setSearchValue(event.target.value);
		if (event.target.value.length > 5) {
			const provider = new OpenStreetMapProvider();
			provider
				.search({ query: event.target.value })
				.then(res => {
					console.log(res);
					setSearchResults(res);
					dispatch({ type: types.SET_SEARCH_RESULTS, data: res });
					if (res.length > 0) {
						props.onChangeLatLngHandler(res[0].raw.lat, res[0].raw.lon);
					}
				})
				.catch(err => console.log(err));
		}
	};

	return (
		<div className='search-container'>
			<input
				className='search-input'
				type='text'
				id='searchInput'
				placeholder='Enter Search'
				value={searchValue}
				onChange={searchInputChangeHandler}
			/>
			{/* <div>
				<ul>
					{searchResults.length > 0
						? searchResults.map(result => {
								return <li>{result.label}</li>;
						  })
						: null}
				</ul>
			</div> */}
		</div>
	);
};

export default SearchComponent;
