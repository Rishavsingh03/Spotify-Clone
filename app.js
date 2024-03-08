let first=false;
btn=document.querySelector("#create");
let f=document.querySelector(".frm");
btn.addEventListener("click",function(){
    // let inp=document.createElement("input");
    // // inp.classList.add("badge");
    // inp.innerText="Enter Songs";
    // let but=document.createElement("button");
    // but.classList.add("bad");
    // but.innerText="GOO!!";

    // btn.parentElement.appendChild(inp);
    // btn.parentElement.appendChild(but);

    if(first==false){
        f.classList.add("frm1");
        first=true;
    }
    else{
        f.classList.remove("frm1");
        first=false;
    }
   
})

f.addEventListener("submit",function(e){
    e.preventDefault();
    let songs=this.elements[0];
    let song=songs.value;
    let parent=document.querySelector(".list");
    let p=document.createElement("li");
    p.innerText=song;
    parent.appendChild(p);
    f.reset();
    console.log("Song added");
    console.log(song);
})


