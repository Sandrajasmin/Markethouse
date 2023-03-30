import HeroBanner from './components/heroBanner';
import AllProducts from '../../global/components/products';
// import ErrorComponent from "../../components/shared/ErrorComponent";

function Homepage() {
    return (
        <>
        <HeroBanner />
        <AllProducts />
        </>
    );
}

export default Homepage;