import "./App.css";
import Router from "./routes/Router";
import { useSelector } from "react-redux";
import Loader from "./global/components/Loader";
import Layout from "./global/layout";

function App() {
	const { isLoading } = useSelector((state) => state.loader);

	return (
		<>
			<Layout>
				<Router />
				{isLoading && <Loader />}
			</Layout>
		</>
	);
}

export default App;
