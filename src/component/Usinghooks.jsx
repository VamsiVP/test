import {useState} from 'react';

const Hooks = () => {
   
    
    const [start, setStart] = useState('Vamsi');

    const [age, setAge] = useState(25);

    const handleClick = ()=> {
        setStart('Rajesh');
        setAge(30);
    }

    // const handleClickAgain = (name, e)=> {
    //     console.log('hello '+ name, e.target);
    // }

    return ( 
       <div>
        <h2>Homepage</h2>
        <p>{start} is {age} years old.</p>
        <button onClick={handleClick}>Click me</button>
        {/* <button onClick= {()=> handleClickAgain('yash')}>Click me again</button> */}
       </div> 
     );
}
 
export default Hooks;