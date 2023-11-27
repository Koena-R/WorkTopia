const x=document.querySelectorAll(".footer-drop");
const footerDropContent=document.querySelectorAll(".footer-drop-content");
let arr=[];            
for(j=0;j<x.length;j++){
    arr.push(x[j]);
}
console.log(arr);



const initApp=()=>{

    const footerDrop=document.querySelectorAll(".footer-drop");
    
    for(i=0;i<footerDrop.length;i++){
        console.log(footerDrop[i]);
        footerDrop[i].addEventListener("click",(event)=>{
            let i=0;
            event.stopPropagation();
            if(event.target.classList.length!==1){
                i=arr.indexOf(event.target.parentElement);
            }
            else{
                i=arr.indexOf(event.target);
            }

            if(footerDropContent[i].style.display==="none"){
                footerDropContent[i].style.display="flex";
            }
            else{
                footerDropContent[i].style.display="none"
            }
        });
    }

    
}


document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        initApp();
    }
});