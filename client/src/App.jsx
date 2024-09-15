import "./App.css";
import "./Ant-design.css";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PageRoutes from "./Routes.jsx";
import { BrowserRouter } from "react-router-dom";

import { StyleProvider } from "@ant-design/cssinjs";

export function formatDate(isoDateStr) {
    const date = new Date(isoDateStr);

    const options = { day: "numeric", month: "long", year: "numeric" };

    // Format the date using 'en-GB' locale to get the day before the month
    return date.toLocaleDateString("en-GB", options);
}

export function formatPrice(number) {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
}
export function formatNumber(number) {
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
    });
    return formatter.format(number);
}
const App = () => {
    return (
        <StyleProvider hashPriority="high">
            <div className="app">
                <BrowserRouter>
                    <Navbar />
                    <PageRoutes />
                    <Footer />
                </BrowserRouter>
            </div>
        </StyleProvider>
    );
};

export default App;
