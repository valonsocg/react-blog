import "./SinglePost.css";
import singlePostImg from "../../assets/astromundo.avif";

export default function SInglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src={singlePostImg}
					alt="un astronauta programador sobre el mundo"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet.
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-solid fa-pen-to-square" />
						<i className="singlePostIcon fa-solid fa-trash-can" />
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Alonso</b>
					</span>
					<span className="singlePostDate">1 Hour ago</span>
				</div>
				<p className="singlePostDescription">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					similique doloremque? Id veritatis, distinctio, labore, at rerum animi
					deleniti maiores debitis quos quia consectetur quasi molestiae nemo
					soluta sunt atque! Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Tempore, similique doloremque? Id veritatis, distinctio, labore,
					at rerum animi deleniti maiores debitis quos quia consectetur quasi
					molestiae nemo soluta sunt atque! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Tempore, similique doloremque? Id
					veritatis, distinctio, labore, at rerum animi deleniti maiores debitis
					quos quia consectetur quasi molestiae nemo soluta sunt atque! Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique
					doloremque? Id veritatis, distinctio, labore, at rerum animi deleniti
					maiores debitis quos quia consectetur quasi molestiae nemo soluta sunt
					atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore, similique doloremque? Id veritatis, distinctio, labore, at
					rerum animi deleniti maiores debitis quos quia consectetur quasi
					molestiae nemo soluta sunt atque!
				</p>
			</div>
		</div>
	);
}
