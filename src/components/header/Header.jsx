import "./Header.css";
import headerBg from "../../assets/gallito-background.jpg";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSmall">React & Node</span>
				<span className="headerTitleLarge">Blog</span>
			</div>
			<img
				className="headerBg"
				src={headerBg}
				alt="Gallito de las rocas paisaje"
			/>
		</div>
	);
}
