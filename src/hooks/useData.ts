import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/config";

export interface Data {
	ipAddress: string;
	location: string;
	isp: string;
	timezone: string;
	position: [a: number, b: number];
}

export interface ResponseType<T> {
	status: number;
	message: string;
	data: T;
}

// Feat: Handle Errors
const getData = async (value: string): Promise<ResponseType<Data>> => {
	const res = await axiosInstance.get("", {
		params: {
			ipAddress: value,
		},
	});
	const { data } = res;
	return {
		status: res.status,
		message: "Successful",
		data: {
			ipAddress: data.ip,
			location: `${data.location.country}, ${data.location.region} ${data.location.city}`,
			isp: data.isp,
			timezone: data.location.timezone,
			position: [data.location.lat, data.location.lng],
		},
	};
};

const useData = (ipAddress: string) => {
	return useQuery<ResponseType<Data>, Error>({
		queryKey: ["location", ipAddress],
		queryFn: () => getData(ipAddress),
		retry: 1,
		keepPreviousData: true,
	});
};

export default useData;
