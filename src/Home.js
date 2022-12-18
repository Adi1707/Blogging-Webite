import { useState } from "react";

const Home = () => {

    // let name = 'Aditya';
    const [name, setname] = useState(['aditya']);  //reactive value
    const [age, setage] = useState('19');
    const handleClick = () => {
        setname('Aditya Pandey');
        setage('20');
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} old.</p>
            <button className="btn" onClick={handleClick}>Click Me</button>
            
        </div>
     );
}
 
export default Home;