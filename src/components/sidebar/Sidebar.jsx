import "./Sidebar.css";
import aboutImg from "../../assets/aboutImg.jpg";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img src={aboutImg} alt="avatar de programador astronauta" />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex earum
					totam, deleniti at ipsam mollitia ab voluptatem incidunt quasi?
					Debitis saepe dolores id quas nisi nihil, laudantium delectus tenetur
					asperiores.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Sport</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Cinema</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW ME</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-square-facebook" />
					<i className="sidebarIcon fa-brands fa-square-x-twitter" />
					<i className="sidebarIcon fa-brands fa-square-instagram" />
					<i className="sidebarIcon fa-brands fa-tiktok" />
				</div>
			</div>
		</div>
	);
}
