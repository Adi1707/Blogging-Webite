import { Link } from "react-router-dom";

const notFound = () => {
    return ( 
        <div>
             <h2>Unable to find the page</h2>
             <Link to="/">Back to HomePage</Link>
        </div>
     );
}
 
export default notFound;