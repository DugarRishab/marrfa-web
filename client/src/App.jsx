import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PageRoutes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";

export function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);

    const options = { day: "numeric", month: "long", year: "numeric" };

    // Format the date using 'en-GB' locale to get the day before the month
    return date.toLocaleDateString("en-GB", options);
}

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
