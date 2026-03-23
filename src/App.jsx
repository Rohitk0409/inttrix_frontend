import { BrowserRouter } from "react-router-dom";
import FloatingButtons from "./components/common/FloatingButtons";
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
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
