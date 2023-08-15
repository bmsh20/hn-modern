import { useState } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/layouts/Header";
import Dashboard from "./components/layouts/Dashboard";
import Sidenav from "./components/layouts/Sidenav";
import Footer from "./components/layouts/Footer";
import { ThreadContext } from "./context/context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterTag, setFilterTag] = useState("topstories");

  return (
    <ThreadContext.Provider
      value={{ filterTag, setFilterTag, searchValue, setSearchValue }}
    >
      <QueryClientProvider client={queryClient}>
        <Header />
        <Sidenav />
        <Dashboard />
        <Footer />
      </QueryClientProvider>
    </ThreadContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
