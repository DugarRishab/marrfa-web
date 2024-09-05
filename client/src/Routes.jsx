import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

const PageRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route exact path="/home" element={<Homepage />}></Route>
            {/* <Route exact path="/chapters">
                <Route path=":id" element={<Chapterpage></Chapterpage>}></Route>
                <Route path="" element={<ComingSoon />}></Route>
            </Route> */}
        </Routes>
    );
};

export default PageRoutes;
