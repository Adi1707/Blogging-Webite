import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    // setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);

    }, []);

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} name="All Books!" />}

            {/* <BlogList blogs={blogs.filter((blog) =>
                blog.author === 'JK Rowling' )} name="JK Rowling"></BlogList> */}
        </div>
     );
}
 
export default Home;