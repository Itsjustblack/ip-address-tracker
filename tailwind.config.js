/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				heroBgMobile: "url('/src/assets/images/pattern-bg-mobile.png')",
				heroBgDesktop: "url('/src/assets/images/pattern-bg-desktop.png')",
			},
		},
	},
	plugins: [],
};
