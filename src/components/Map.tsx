import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import marker from "./../assets/icons/icon-location.svg";

interface Props {
	position?: [a: number, b: number];
}

const RecenterAutomatically = ({ position = [6.45407, 3.39467] }: Props) => {
	const map = useMap();

	useEffect(() => {
		map.setView(position);
	}, [map, position]);
	return null;
};

const customIcon = L.icon({
	iconUrl: marker,
	iconSize: [33, 40],
	iconAnchor: [12, 12],
	// popupAnchor: [0, 0],
});

const Map = ({ position = [6.45407, 3.39467] }: Props) => {
	return (
		<div className="relative z-0">
			<MapContainer
				className="h-full w-full object-contain relative"
				center={position}
				zoomControl={false}
				zoom={15}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					position={position}
					icon={customIcon}
					// eventHandlers={{
					// 	click: () => console.log("marker clicked"),
					// }}
				>
					{/* <Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup> */}
				</Marker>
				<RecenterAutomatically position={position} />
			</MapContainer>
		</div>
	);
};

export default Map;
