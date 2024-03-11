let inp=document.querySelector("input");
let btn=document.querySelector("button");

let ul=document.querySelector("ul");

        btn.addEventListener("click",function(){
            let item=document.createElement("li");
            item.innerText=inp.value;
            
            let delbtn=document.createElement("button");
            delbtn.innerText="  Done"   
            delbtn.classList.add("delete");
        
            item.appendChild(delbtn);
            ul.appendChild(item);
            inp.value="";
        })
        inp.addEventListener("keydown",function(event){
            if(event.key=="Enter"){
            let item=document.createElement("li");
            item.innerText=inp.value;
            
            let delbtn=document.createElement("button");
            delbtn.innerText="     Done"   
            delbtn.classList.add("delete");
        
            item.appendChild(delbtn);
            ul.appendChild(item);
            inp.value="";}
        })
        // bubbling used
        ul.addEventListener("click",function(event){
            gg=event.target.nodeName;
            if(gg=="BUTTON"){
                let x=event.target.parentElement;
                x.remove();
            }
        })

