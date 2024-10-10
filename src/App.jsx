import "./App.css";
import "./Ant-design.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PageRoutes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";

import { ConfigProvider, theme } from "antd";

import { StyleProvider } from "@ant-design/cssinjs";

const App = () => {
    return (
		<ConfigProvider
			theme={{
				token: {
					// Seed Token
					colorPrimary: "#46A29F",
					borderRadius: 2,

					// Alias Token
					colorBgContainer: "#fff",
                },
                components: {
                    Descriptions: {
                        contentColor: 'white',
                        labelBg: 'rgb(255, 255, 255, 0.5)'
                    }
                },
				// algorithm: theme.darkAlgorithm,
			}}
		>
			<StyleProvider hashPriority="high">
				<div className="app">
					<BrowserRouter>
						<Navbar />
						<PageRoutes />
						<Footer />
					</BrowserRouter>
				</div>
			</StyleProvider>
		</ConfigProvider>
	);
};

export default App;
