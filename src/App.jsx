import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./routes/AppRoute";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <NavBar />

      {/* All routes */}
      <AppRoute />
      {/* Global Floating Button */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
