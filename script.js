// open-nav
const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').
addEventListener("click", () => {
    console.log("clicked");
    container.classList.add("change");

});


//close nav
document.querySelector('.close-navbar-icon').
addEventListener('click', () => {
    container.classList.remove('change');

});




// assign them to different background color to navBar
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let count = 0;

// now we need to look throught them and assign the background color to each of the item 

// need to transform node list to ArrayList therefor need to use Array.from method forEach allow us 
//to look through an array and execute a functon for each array  
Array.from(document.querySelectorAll('.nav-link')).
forEach((item) => {
            item.style.cssText = `background-color:${colors[count++]}`;
});


/* nwe need to transform it into array then we have look through 
the bottons and attach both of them on click handler in order to 
transform node list into to array we need to use ES6's Array. from methods*/
console.log("heloo");
Array.from(document.querySelectorAll(".navigation-button")).forEach((item) =>{
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    }
});
