import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { idOfBlog } = useParams();

    return ( 
        <div className="blog-details">
            <h2>Blog Details - {idOfBlog} </h2>
        </div>
     );
}
 
export default BlogDetails;