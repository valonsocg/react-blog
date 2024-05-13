import "./Write.css";

export default function Write() {
	return (
		<div className="write">
			<img
				className="writeImg"
				src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/250885351/1800"
				alt="gallito de las rocas"
			/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fa-solid fa-plus" />
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput writeText"
					/>
				</div>
				<button type="submit" className="writeSubmit">
					Publish
				</button>
			</form>
		</div>
	);
}
