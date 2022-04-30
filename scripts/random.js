import navbar from "../scripts/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



// let id;
// function debounce(func,delay){
//     if (id) {
//         clearTimeout(id);
//     }

//       id=  setTimeout(function(){
//         func();
//     },delay);
// }

let url ="https://www.themealdb.com/api/json/v1/1/random.php";
let container =document.getElementById("box");
container.innerHTML=null;
import {getdata1,append1} from "./fetch.js"

getdata1(url).then((res)=>{
    append1(res,container);
    // console.log(res)
})
