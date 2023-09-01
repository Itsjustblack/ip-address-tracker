import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayData from "./components/DisplayData";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import useData from "./hooks/useData";
import { IPV4, IPV6 } from "./constants";

function App() {
	const [searchValue, setsearchValue] = useState("");

	const handleSubmit = (value?: string) => {
		if (value) {
			if (IPV4.test(value) || IPV6.test(value)) setsearchValue(value);
			else toast.error("Invalid IP Address");
		} else toast.error("Enter an IP Address");
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	const { data: res, isLoading } = useData(searchValue);
	return (
		<div
			onLoad={scrollToTop}
			className="customFill"
		>
			<header className="bg-heroBgDesktop bg-center bg-cover bg-no-repeat w-full px-7 pt-12 lg:pt-5 pb-[80px] lg:pb-[50px] flex flex-col items-center">
				<h1 className="text-white font-medium text-[28px] mb-5 text-center">IP Address Tracker</h1>
				<SearchBar handleSubmit={handleSubmit} />
				<DisplayData
					data={res?.data}
					isLoading={isLoading}
				/>
			</header>
			<Map position={res?.data?.position} />
		</div>
	);
}

export default App;
