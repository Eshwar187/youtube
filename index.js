var a=document.querySelector("button")
var b=document.querySelector("h2")
flag=0
a.addEventListener("click",function(){
    if(flag==0){
        b.innerHTML="Friends"
        b.style.color="green"
        a.innerHTML="Remove"
        flag=1
    }else{
        b.innerHTML="Stranger"
        b.style.color="red"
        a.innerHTML="Add Friends"
        flag=0
    }
})

