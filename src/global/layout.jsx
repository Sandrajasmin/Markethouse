import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;