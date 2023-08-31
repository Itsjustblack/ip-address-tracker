import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@icons": path.resolve(__dirname, "./src/assets/icons"),
			"@images": path.resolve(__dirname, "./src/assets/images"),
		},
	},
});
