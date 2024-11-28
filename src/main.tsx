import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.less";

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    retry: 0,
    staleTime: 5000,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
  },
  mutations: {
    retry: 0,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
