import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "pages/Favorites";
import Header from "components/header";
import Footer from "components/footer";
import Common from "components/common";
import FavoritesProvider from "contexts/favorites";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Common>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favorites" element={<Favorites />}></Route>
                    </Routes>
                </FavoritesProvider>
            </Common>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;