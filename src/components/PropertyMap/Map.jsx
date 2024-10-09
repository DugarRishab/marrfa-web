import Map, { Marker } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const PropertyMap = ({ lat, long }) => {
	return (
		<Map
			mapStyle="mapbox://styles/rishab-marrfa/cm1dli11y02es01qo5ktz70pi"
			style={{
				width: "100%",
				height: "100%",
				borderRadius: "var(--border-radius)",
			}}
			mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
			initialViewState={{
				longitude: long,
				latitude: lat,
				zoom: 15,
			}}
		>
			<Marker longitude={long} latitude={lat} anchor="bottom">
				<span className="material-symbols-outlined" style={{color: "red"}}>location_on</span>
			</Marker>
		</Map>
	);
};
