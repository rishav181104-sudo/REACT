import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost}= useContext(PostList);



  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill border border-bg theme-danger" onClick={()=>deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        <div>
          {post.tags.map(tag => (<span key={tag} className="badge theme-primary hashtag">{tag}</span>
          ))}
        </div>
        <div className="alert theme-success reactions" role="alert">
          <p>This Post has been reacted by
            {post.reactions} People</p>
        </div>
      </div>
    </div>
  );
};
export default Post;