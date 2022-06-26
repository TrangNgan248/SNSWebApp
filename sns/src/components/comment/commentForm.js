import "../post/post.css";
import 'antd/dist/antd.min.css';

export default function CommentForm() {
    function componentDidMount(postId) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: "abc" })
        };
        fetch('http://127.0.0.1:8000/api/comment/'.postId, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }
    return (
        <div className="commentInput">
            <img className="commentProfileImg" src="assets/testimg/Ayame2.jpg" alt="" />
            <input placeholder="Enter your comment?" className="shareInput" />
        </div>
    )
}