import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onError: (error: any) => {
			if (error.response.status >= 400) toast.error(`Api key has Expired`);
			else toast.error(`Something has Occured: ${error.message}`);
		},
	}),
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer position="top-right" />
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
