import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import './MapComponent.css';

import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import SearchComponent from '../SearchComponent/SearchComponent';
import * as types from '../../store/constants';

const customMarkerIcon = L.icon({
	iconUrl:
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
	iconSize: [25, 41],
	iconAnchor: [12.5, 41],
	popupAnchor: [0, -41]
});

const MapComponent = props => {
	// const dispatch = useDispatch();

	const [lat, setLat] = useState(12.922117);
	const [lng, setLng] = useState(77.590396);
	const [zoom] = useState(17);
	const [positionArray, setPositionArray] = useState([
		{
			lat: 12.922117,
			lng: 77.590396
		},
		{
			lat: 12.922137,
			lng: 77.58941
		},
		{
			lat: 12.922448,
			lng: 77.590786
		},
		{
			lat: 12.922894,
			lng: 77.589452
		}
	]);

	const position = [lat, lng];

	const onChangeLatLngHandler = (latitude, longitude) => {
		const updatedPositionArray = [...positionArray];
		updatedPositionArray.push({ lat: latitude, lng: longitude });
		setPositionArray(updatedPositionArray);
	};

	return (
		<React.Fragment>
			<SearchComponent
				onChangeLatLngHandler={(lat, lng) => onChangeLatLngHandler(lat, lng)}
			/>
			<Map
				className='map'
				center={position}
				zoom={zoom}
				maxZoom={19}
				minZoom={5}
			>
				<TileLayer
					attribution="&amp;copy <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					// url='http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png'
				/>
				{/* <Marker position={position} icon={customMarkerIcon}>
          <Popup>
            Lat: {lat}, Long: {lng}
          </Popup>
        </Marker> */}
				{positionArray.length > 0
					? positionArray.map((pos, index) => {
							return (
								<Marker key={index} position={pos} icon={customMarkerIcon}>
									<Popup>
										<strong>Property Name:</strong> Marker {index + 1}
										<br />
										<strong>Latitude:</strong> {pos.lat}
										<br />
										<strong>Longitude:</strong> {pos.lng}
										<br />
										<strong>Elevation:</strong> <br />
									</Popup>
								</Marker>
							);
					  })
					: null}
			</Map>
		</React.Fragment>
	);
};

export default MapComponent;
