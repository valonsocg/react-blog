import "./TopBar.css";
import userImg from "../../assets/program-astro.avif";
import { NavLink, Link } from "react-router-dom";

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
						<li className="topListItem">
							<NavLink
								to="/"
								style={({ isActive }) => ({
									textDecoration: isActive ? "none" : undefined,
								})}
							>
								HOME
							</NavLink>
						</li>
						<li className="topListItem">
							<NavLink to="/">ABOUT</NavLink>
						</li>
						<li className="topListItem">
							<NavLink to="/">CONTACT</NavLink>
						</li>
						<li className="topListItem">
							<NavLink to="/write">WRITE</NavLink>
						</li>
						<li className="topListItem">
							<Link to="/">LOGOUT</Link>
						</li>
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
