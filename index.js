// // Your code goes here

// function domLoading(){
//   document.querySelector("p").textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";

//   const load = document.createEvent('load');
//   event.initEvent( 'DOMContentLoaded', true, true );
//   window.document.dispatchEvent,(load) =>{
//   document.querySelector( 'p' ).textContent = "This is really cool!";
//   })
// }

document.addEventListener("DOMContentLoaded", function(e){
    document.querySelector( 'p' ).textContent = "This is really cool!";
})
