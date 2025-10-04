import "./App.css";
import { Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharactersPage />} />
    </Routes>
  );
}

export default App;
