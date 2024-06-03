import { Outlet } from "react-router-dom";
import Topbar from "../../components/TopBar/TopBar";

export default function Root() {
	return (
		<>
			<Topbar />
			<Outlet />
		</>
	);
}
