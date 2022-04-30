function navbar(){
    return `
    
    <img id="giphy" src="   https://media2.giphy.com/media/Aq9QWVIMYtzFK/200.webp?cid=ecf05e477w76bktgedbug9k25vhwugytw0fr6v0w96tws7jd&rid=200.webp&ct=g" alt="">
    

<h3 id="home">
    <a href="index.html">Home</a>
</h3>
<div id="nameOf"><input type="text" id="query"  ></div>

<div id="options">

    <h3>
        <a href="dayrecipe.html">Recipe of day</a>
    </h3> 
    
    <h3>
    <a href="random.html">Random Recipe</a>
    </h3> 

   
    <h3>
        <a href="login.html">LogIn</a>
    </h3>
    <h3>
        <a href="signup.html">SignUp</a>
    </h3>
</div>
    `;
}
export default navbar;