import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact={true} element={<Home />} />
                <Route path='/about' exact={true} element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}