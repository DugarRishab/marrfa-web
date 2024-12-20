import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Projects from "./pages/Projects/Projects";
import AboutUs from "./pages/AboutUs/AboutUs";
import Property from "./pages/Property/Property";
import Blogs from "./pages/Blogs/Blogs";
import PeoplePage from "./pages/People/People";
import BrouchurePage from "./pages/Brouchure/Brouchure";
import BlogView from "./pages/Blog/Blog";

const PageRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/property/:id" element={<Property></Property>}></Route>
            <Route exact path="/about" element={<AboutUs />}></Route>
            {/* <Route exact path="/chapters">
                <Route path=":id" element={<Chapterpage></Chapterpage>}></Route>
                <Route path="" element={<ComingSoon />}></Route>
                </Route> */}
            {/* <Route exact path="/test" element={<ProjectDesc projectName={"Manhattan Project"} highlights={["amazing", "destructive", "hard", "physics", "bomb"]} image={"/assets/projects/projectbanner.png"}/>}></Route> */}
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blog/:id" element={<BlogView></BlogView>}></Route>
            <Route exact path="/people" element={<PeoplePage></PeoplePage>}></Route>
            <Route exact path="/brochure" element={<BrouchurePage></BrouchurePage>}></Route>
        </Routes>
    );
};

export default PageRoutes;
