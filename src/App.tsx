import { DogsList, DogsManualList } from "./components/DogsList";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <DogsList />
      </div>
      <div>
        <DogsManualList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
