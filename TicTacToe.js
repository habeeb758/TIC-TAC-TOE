let turn='x';
let boxes= document.querySelectorAll(".box");
let isGameOver=false;
boxes.forEach(element => {
    element.innerHTML="";
    element.addEventListener("click",()=>{
        if(!isGameOver && element.innerHTML===""){
            element.innerHTML=turn;
            checkWin();
            if(!isGameOver){
                
                checkTurn();
            }
            checkDraw();

        }
    })
});
function checkTurn(){
    if(turn==='x'){
        turn='o';

    }
    else{
        turn='x';
    }
}
function checkWin(){
    let winCond=[[0,1,2],[3,4,5],[6,7,8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]];

    for(let i=0;i<winCond.length;i++){
        let v0=boxes[winCond[i][0]].innerHTML;
        let v1=boxes[winCond[i][1]].innerHTML;
        let v2=boxes[winCond[i][2]].innerHTML;

        if(v0!="" && v0===v1 && v0===v2){
            isGameOver=true;
            document.querySelector(".res").innerHTML=turn+"  WIN";
            
        
        for(let j=0;j<3;i++){
            boxes[winCond[i][j]].style.backgroundColor="rgb(0,0,0)"
            boxes[winCond[i][j]].style.color="rgb(255,255,255)";
        }
    }
}
}
function checkDraw(){
    if(!isGameOver){
        let draw=true;
        boxes.forEach(e=>{
            if(e.innerHTML===""){
                draw=false;
            }
            
        })
        if(draw && !isGameOver){
            
            document.querySelector(".res").innerHTML="DRAW-PLAY AGAIN";
            isGameOver=true;

        }

    }
}

document.querySelector(".play-again").addEventListener("click",()=>{
    isGameOver=false;
    turn='x';
    document.querySelector(".res").innerHTML="";
    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.backgroundColor="";
        e.style.color="";
    })
})