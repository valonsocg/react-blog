import "./Register.css";

export default function Register() {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your username..."
				/>
				<label>Email</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter your email..."
				/>
				<label>Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="Enter your password"
				/>
				<button type="button" className="registerButton">
					Register
				</button>
			</form>
			<button type="submit" className="registerLoginButton">
				Login
			</button>
		</div>
	);
}
