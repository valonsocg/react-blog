import "./TopBar.css";
import userImg from "../../assets/program-astro.avif";

export default function Topbar() {
	return (
		<>
			<div className="topBar">
				<div className="topLeft">
					<i className="topIcon fa-brands fa-square-facebook" />
					<i className="topIcon fa-brands fa-square-x-twitter" />
					<i className="topIcon fa-brands fa-square-instagram" />
					<i className="topIcon fa-brands fa-tiktok" />
				</div>
				<div className="topCenter">
					<ul className="topList">
						<li className="topListItem">HOME</li>
						<li className="topListItem">ABOUT</li>
						<li className="topListItem">CONTACT</li>
						<li className="topListItem">WRITE</li>
						<li className="topListItem">LOGOUT</li>
					</ul>
				</div>
				<div className="topRight">
					<img
						className="topImg"
						src={userImg}
						alt="Avatar de programador astronauta"
					/>
					<i className="searchIcon fa-solid fa-magnifying-glass" />
				</div>
			</div>
			;
		</>
	);
}
