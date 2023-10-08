let a=document.getElementById("dark");
let f=true;
a.addEventListener("click",()=>{
  if(f==true){
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    f=false;
  }
  else{
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").style.color="black";
    f=true;
  }
})