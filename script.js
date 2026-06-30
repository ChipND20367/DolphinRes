const counters = [

{
id:"beds",
target:320
},

{
id:"students",
target:1200
},

{
id:"years",
target:8
},

{
id:"universities",
target:5
}

];

counters.forEach(counter=>{

let count=0;

const element=document.getElementById(counter.id);

const update=()=>{

count++;

element.innerText=count;

if(count<counter.target){

requestAnimationFrame(update);

}

}

update();

});

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}

else{

nav.style.display="flex";

nav.style.flexDirection="column";

nav.style.position="absolute";

nav.style.top="80px";

nav.style.right="30px";

nav.style.background="#0d3b66";

nav.style.padding="20px";

nav.style.borderRadius="10px";

}

});