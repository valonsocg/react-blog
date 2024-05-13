import Sidebar from "../../components/sidebar/Sidebar";
import SInglePost from "../../components/singlepost/SInglePost";
import "./Single.css";

export default function Single() {
	return (
		<div className="single">
			<SInglePost />
			<Sidebar />
		</div>
	);
}
