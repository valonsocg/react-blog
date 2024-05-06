import "./Post.css";
import postImg from "../../assets/post-img.webp";

export default function Post() {
	return (
		<div className="post">
			<img className="postImg" src={postImg} alt="eco development" />
			<div className="postInfo">
				<div className="postCategories">
					<span className="postCategory">Music</span>
					<span className="postCategory">Life</span>
				</div>
				<span className="postTitle">Lorem ipsum sit.</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDescription">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
				atque temporibus accusamus nobis labore rem asperiores sit, quasi omnis
				vel numquam officia non ipsum soluta blanditiis corporis, incidunt
				repudiandae sequi?
			</p>
		</div>
	);
}
