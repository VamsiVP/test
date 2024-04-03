

const Home = () => {
    let name= "Vamsi";
    
    

   const handleClick = ()=> {
        console.log('Hello, Buddy');
    }

    // const handleClickAgain = (name, e)=> {
    //     console.log('hello '+ name, e.target);
    // }
    return ( 
       <div>
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click me</button>
        {/* <button onClick= {()=> handleClickAgain('yash')}>Click me again</button> */}
       </div> 
     );
}
 
export default Home;