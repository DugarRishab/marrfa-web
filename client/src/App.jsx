import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PageRoutes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<PageRoutes />
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
