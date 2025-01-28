import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalContex";

function App() {
  return (
    <GlobalProvider>
      <Header />
    </GlobalProvider>
  );
}

export default App;
