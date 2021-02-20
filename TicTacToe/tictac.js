let xTurnToPlay = true;
let won = false;

document.addEventListener("click", mark)
function mark(e){
    if(won === false && e.target.classList.contains("cell")){
        if(xTurnToPlay){
            e.target.innerHTML="<h1>X</h1>"
        }
        else{e.target.innerHTML = "<h1>O</h1>"}
        xTurnToPlay = !xTurnToPlay
    }
}

document.addEventListener("click",findWinner)

function findWinner(){
    if(HTMLTableCellElement.innerHTML !== "" && cell1.innerHTML === cell2.innerHTML && cell1.innerHTML === cell3.innerHTML){
        cell1.classList.add("winner")
        cell2.classList.add("winner")
        cell3.classList.add("winner")
        won = true
    }
    else if(cell4.innerHTML !== "" && cell4.innerHTML === cell5.innerHTML && cell4.innerHTML === cell6.innerHTML){
        cell4.classList.add("winner")
        cell5.classList.add("winner")
        cell6.classList.add("winner")
        won = true
    }
    else if(cell7.innerHTML !== "" && cell7.innerHTML === cell8.innerHTML && cell7.innerHTML === cell9.innerHTML){
        cell7.classList.add("winner")
        cell8.classList.add("winner")
        cell9.classList.add("winner")
        won = true
    }
    else if(cell1.innerHTML !== "" && cell1.innerHTML === cell4.innerHTML && cell1.innerHTML === cell7.innerHTML){
        cell1.classList.add("winner")
        cell4.classList.add("winner")
        cell7.classList.add("winner")
        won = true
    }
    else if(cell2.innerHTML !== "" && cell2.innerHTML === cell5.innerHTML && cell2.innerHTML === cell8.innerHTML){
        cell2.classList.add("winner")
        cell5.classList.add("winner")
        cell8.classList.add("winner")
        won = true
    }
    else if(cell3.innerHTML !== "" && cell3.innerHTML === cell6.innerHTML && cell3.innerHTML === cell9.innerHTML){
        cell3.classList.add("winner")
        cell6.classList.add("winner")
        cell9.classList.add("winner")
        won = true
    }
    else if(cell1.innerHTML !== "" && cell1.innerHTML === cell5.innerHTML && cell1.innerHTML === cell9.innerHTML){
        cell1.classList.add("winner")
        cell5.classList.add("winner")
        cell9.classList.add("winner")
        won = true
    }
    else if(cell3.innerHTML !== "" && cell3.innerHTML === cell5.innerHTML && cell3.innerHTML === cell7.innerHTML){
        cell3.classList.add("winner")
        cell5.classList.add("winner")
        cell7.classList.add("winner")
        won = true
    }

    if(won){
        won = false
        const cells = document.getElementsByClassName("cell")
        setTimeout(()=>{
            if(xTurnToPlay){
                alert("0 won!")
            }
            else {alert ("X won!")}
            for(const i of cells){
                i.innerHTML = ""
                i.classList.remove("winner")
            }
        }, 1000)
    }
}