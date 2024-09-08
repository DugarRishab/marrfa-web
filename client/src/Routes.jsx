import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProjectDesc from "./components/projectdesc/ProjectDesc";
import PropertyRequestForm from "./components/PropertyRequestForm/PropertyRequestForm";

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
            {/* <Route exact path="/test" element={<ProjectDesc projectName={"Manhattan Project"} highlights={["amazing", "destructive", "hard", "physics", "bomb"]} image={"/assets/projects/projectbanner.png"}/>}></Route> */}
        <Route exact path="/test" element={<PropertyRequestForm />}></Route>
        </Routes>
    );
};

export default PageRoutes;
