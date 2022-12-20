import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [load, setLoad] = useState(false);
    const [added, setAdded] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Aditya Pandey');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setLoad(true);
        e.preventDefault();
        const blog = { title, body, author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(blog)
        })
        .then(() => {
            setAdded(true);
            navigate(-1);
        })
    }
    

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label> Blog Title </label>
                <input 
                    type='text' 
                    required
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                />

                <label> Blog Body </label>
                <textarea
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>

                <label> Blog Author </label>
                <select 
                    value={author}
                    onChange = { (e) => setAuthor(e.target.value)}
                >
                    <option value="Aditya Pandey">Aditya Pandey</option>
                    <option value="Richa Sinha">Richa Sinha</option>
                    <option value="Aditya Prakash">Aditya Prakash</option>

                </select>

                {!load && <button>Add Blog</button>}
                {load && !added && <button disabled>Adding</button>}
                {load && added && <button disabled>Added</button>}
            </form>
        </div>

     );
}
export default Create;