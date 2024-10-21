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
					borderRadius: 'var(--border-radius)',

					// Alias Token
					colorBgContainer: "#fff",
				},
				components: {
					Descriptions: {
						contentColor: "white",
						labelBg: "rgb(255, 255, 255, 0.5)",
					},
					Slider: {
						// controlHeight: '50',
						// handleColor: 'black',
						railBg: "var(--black)",
						railHoverBg: "var(--black)",
						railSize: 5,
						trackBg: "var(--cyan)",
						borderRadius: 8,
					},
					Segmented: {
						itemActiveBg: "var(--lightblue)",
						itemSelectedBg: "var(--lightblue)",
						trackBg: "rgba(225, 225, 225, 0.1)",
						itemColor: "white",
						itemSelectedColor: "white",
						itemHoverColor: "white",
						itemHoverBg: "rgba(225, 225, 225, 0.25)",
						trackPadding: '5px'
					},
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
