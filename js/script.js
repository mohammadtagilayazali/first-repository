// var w=window.open('https://www.instagram.com/','_blank',"width=200,height=100,screenx=400,scrollbars=0");

var y=document.getElementById('TOP');
// console.log(y);
window.addEventListener("scroll",e=>{
    if(window.scrollY<600)
    {
        y.style.display="block";
        y.classList.add("display-on");
    }
    else{
        y.classList.remove("display-on");
    }
    
})
y.addEventListener("click",e=>{
    if(y.classList.contains("display-on"))
    {

    }
    else{
    window.scrollTo({top:0,behavior:"smooth" },)
    }
})
