import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalProvider } from "./context/GlobalContex";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Main />
    </GlobalProvider>
  );
}

export default App;
