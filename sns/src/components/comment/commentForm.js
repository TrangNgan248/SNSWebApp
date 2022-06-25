import "../post/post.css";
import 'antd/dist/antd.min.css';

export default function CommentForm() {
    return (
        <div className="commentInput">
            <img className="commentProfileImg" src="assets/testimg/Ayame2.jpg" alt="" />
            <input placeholder="Enter your comment?" className="shareInput" />
        </div>
    )
}