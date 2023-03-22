import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Header from "../pages/master/Header";
import Footer from "../pages/master/Footer";

export const AppRouter = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact={true} element={<Home />} />
                    <Route path='/about' exact={true} element={<About />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}