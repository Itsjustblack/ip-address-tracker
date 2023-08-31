import { Ring } from "@uiball/loaders";
import { Data } from "../hooks/useData";

interface Props {
	data?: Data;
	isLoading: boolean;
}

const DisplayData = ({ data, isLoading }: Props) => {
	return (
		<div className="left-0 right-0 m-auto z-20 absolute lg:top-[180px] top-[240px] w-full xl:w-[80vw]">
			<div className="lg:h-fit min-h-[150px] mx-7 lg:mx-12 bg-white gap-y-5 gap-x-7 xl:gap-10 rounded-2xl py-7 flex lg:flex-row flex-col px-8 text-center lg:text-left justify-around items-center lg:items-start lg:divide-x">
				{isLoading ? (
					<Ring
						size={80}
						lineWeight={4}
						speed={2}
						color="black"
					/>
				) : (
					<>
						<div>
							<h2 className="font-semibold tracking-wider text-[#969696] mb-2 text-xs">IP ADDRESS</h2>
							<span className="font-semibold text-2xl text-[#2b2b2b]">{data?.ipAddress}</span>
						</div>
						<div className="px-8 xl:px-10">
							<h2 className="font-semibold tracking-wider text-[#969696] mb-2 text-xs">LOCATION</h2>
							<span className="font-semibold text-2xl text-[#2b2b2b]">{data?.location}</span>
						</div>
						<div className="px-8 xl:px-10">
							<h2 className="font-semibold tracking-wider text-[#969696] mb-2 text-xs">TIMEZONE</h2>
							<span className="font-semibold text-2xl text-[#2b2b2b]">{data?.timezone}</span>
						</div>
						<div className="px-8 xl:px-10">
							<h2 className="font-semibold tracking-wider text-[#969696] mb-2 text-xs">ISP</h2>
							<span className="font-semibold text-2xl text-[#2b2b2b]">{data?.isp}</span>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default DisplayData;
