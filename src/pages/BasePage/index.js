import Common from "components/common";
import Footer from "components/footer";
import Header from "components/header";
import FavoritesProvider from "contexts/favorites";
import { Outlet } from "react-router-dom";

const BasePage = () => {

    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Common>
                    <Outlet />
                </Common>
            </FavoritesProvider>
            <Footer />
        </main>
    )

}

export default BasePage;