import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.css";
import astroImg from "../../assets/aboutImg.jpg";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingWrapper">
				<div className="settingTitle">
					<span className="settingUpdateTitle">Update your Account</span>
					<span className="settingDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img src={astroImg} alt="astronauta programador" />
						<label htmlFor="fileInput">
							<i className="settingsPPIcon fa-solid fa-circle-user" />
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Alonso" />
					<label>Email</label>
					<input type="email" placeholder="alonso@gmail.com" />
					<label>Password</label>
					<input type="password" />
					<button type="submit" className="settingsSubmit">
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
