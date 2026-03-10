import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <NavBar />

      {/* All routes */}
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
