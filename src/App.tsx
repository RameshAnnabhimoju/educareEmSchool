import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import Routes from "./routes/Routes";
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <NavbarComponent />
      <Routes />
      <FooterComponent />
    </BrowserRouter>
  );
}
export default App;
