let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");
let winner = document.querySelector(".winner");
const winpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
for(box of boxes){
    box.addEventListener("click", () =>{
        count++;
    })
}
const disableboxes = () => 
{
    for(let box of boxes){
        box.disabled=true;
    }
}
let turn="O";
boxes.forEach((box) => {
    box.addEventListener("click",() =>
    {
        console.log("box was clicked");
        if(turn==="O"){
            turn="X";
            box.classList.add("turno");
            box.classList.remove("turnx");
            box.innerText="O";

        }else{
            turn="O";
            box.classList.add("turnx");
            box.classList.remove("turno");
            box.innerText="X";
        }
        box.disabled=true;
        checkwinner();       
    })
});

const checkwinner= () =>{
    for(let pattern of winpattern){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;    
        let pos3= boxes[pattern[2]].innerText;
        if (pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log(`winner is ${pos1}`);
                winner.classList.remove("hide");
                winner.innerText=`winner is ${pos1}`;
                disableboxes();
                
            }else
            if(count>=9){
                console.log("this match was a draw");
                winner.innerText= "this match was a draw";
                winner.classList.remove("hide");
                disableboxes();
            }
        }
    }}

reset.addEventListener("click",()=>{
    for(box of boxes){
    box.innerText="";
    winner.classList.add("hide");
    box.disabled=false;
    count=0;
}
}
)
