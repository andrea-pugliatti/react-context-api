import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function DefaultLayout() {
	return (
		<>
			<NavBar></NavBar>
			<Outlet />
			<Footer />
		</>
	);
}
