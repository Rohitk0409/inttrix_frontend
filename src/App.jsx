import { BrowserRouter } from "react-router-dom";
import WhatsAppButton from "./components/common/WhatsAppButton";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <NavBar />

      {/* All routes */}
      <AppRoute />

      <Footer />
      {/* Global Floating Button */}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
