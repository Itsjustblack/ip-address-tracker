import leftArrow from "@icons/icon-arrow.svg";
import { useRef } from "react";

interface Props {
	handleSubmit: (value?: string) => void;
}

const SearchBar = ({ handleSubmit }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(inputRef.current?.value);
			}}
			className="relative flex overflow-hidden min-w-[60vw] rounded-2xl"
		>
			<input
				ref={inputRef}
				type="text"
				className="text-xl w-full py-4 px-5 placeholder:text-base placeholder:text-[#969696]"
				placeholder="Search for any IP Address"
			/>
			<button
				type="submit"
				className="w-[80px] group"
			>
				<div className="w-full h-full flex justify-center items-center bg-black group-hover:bg-[#2b2b2b] transition-colors duration-500 ">
					<img
						className="w-5 sm:w-6 h-5 sm:h-6 object-contain group-hover:rotate-180 transition-transform duration-500 group-active:scale-110"
						src={leftArrow}
						alt=""
					/>
				</div>
			</button>
		</form>
	);
};

export default SearchBar;
