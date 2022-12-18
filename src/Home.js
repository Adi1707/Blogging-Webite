import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title:'Harry Potter', body:'Cursed Child', author:'JK Rowling', id:1},
        {title:'Twilight', body:'New Dawn', author:'Stephenie Meyer ', id:2},
        {title:'Harry Potter', body:'Half Blood Prince', author:'JK Rowling', id:3},
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(
            (blog) => blog.id !== id
        )
        setBlogs(newBlogs );
    }

    useEffect(
        () => {
            console.log('Rendered the Page');
            console.log(blogs)
        }, []
    )

    return ( 
        <div className="home">
            <BlogList blogs={blogs} name="All Books!" handleDelete={handleDelete} />

            {/* <BlogList blogs={blogs.filter((blog) =>
                blog.author === 'JK Rowling' )} name="JK Rowling"></BlogList> */}
        </div>
     );
}
 
export default Home;