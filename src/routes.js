import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "pages/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                    <Route path="/video/:id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;