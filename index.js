let board= [
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
]
let displayBoard= []
let currentScore= 0
let highScore= 0
function init() {
    for(let i=0;i<16;i++){
        board[i] = 0
    }
    let random1 = Math.floor(Math.random() * 16)
    let random2 = Math.floor(Math.random() * 16)
    board[random1] = 2
    if(random1===random2){
        board[random1-1] = 2
    }
    else{
        board[random2] = 2
    }
    currentScore = 0
    updateScore()
    displayBoard = []
    for(let i=0;i<16;i++){
        displayBoard.push(document.getElementById("boardElement"+i))
    }
}
function reload(){
    updateScore()
    for(let i=0;i<16;i++){
        if(board[i] != 0){
            displayBoard[i].innerHTML = board[i]
            displayBoard[i].className = "boardCol value"+board[i]
        }
        else{
            displayBoard[i].innerHTML = ""
            displayBoard[i].className = "boardCol"
        }
    }
    gameOver()
}

function gameOver(){
    let gameOverVal = true
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[(i*4)+j]===0){
                gameOverVal = false
            }
            else if(j<3 && board[i*4+j]===board[i*4+j-1]){
                gameOverVal = false
            }
            else if(i<3 && board[i*4+j]===board[i*4+j-4]){
                gameOverVal = false
            }
        }
    }
    if(gameOverVal===true){
        document.getElementById("overlay").style.display = "block"
        document.getElementById("overlay").addEventListener("click", start)
    }
}
function updateScore(){
    document.getElementById("currentScoreVal").innerHTML = currentScore
    if(highScore<currentScore){
        highScore = currentScore
    }
    document.getElementById("highScoreVal").innerHTML = highScore
}

function upKey() {
    for(let i=0;i<4;i++){
        //Merging all like
        if(board[0+i]===board[4+i] && board[0+i]!=0){
            board[0+i] += board[4+i]
            currentScore += board[0+i]
            if(board[8+i]===board[12+i]){
                board[4+i] = board[8+i]+board[12+i]
                currentScore += board[4+i]
                board[8+i] = 0
                board[12+i] = 0
            }
            else{
                board[4+i] = board[8+i]
                board[8+i] = board[12+i]
                board[12+i] = 0
            }
        }
        else if(board[0+i]===board[8+i] && board[0+i]!=0 && board[4+i]===0){
            board[0+i] += board[8+i]
            currentScore += board[0+i]
            board[4+i] = board[12+i]
            board[8+i] = 0
            board[12+i] = 0
        }
        else if(board[0+i]===board[12+i] && board[0+i]!=0 && board[4+i]===0 && board[8+i]===0){
            board[0+i] += board[12+i]
            currentScore += board[0+i]
            board[4+i] = 0
            board[8+i] = 0
            board[12+i] = 0
        }
        else if(board[4+i]===board[8+i] && board[4+i]!=0){
            board[4+i] += board[8+i]
            currentScore += board[4+i]
            board[8+i] = board[12+i]
            board[12+i] = 0
        }
        else if(board[4+i]===board[12+i] && board[4+i]!=0 && board[8+i]===0){
            board[4+i] += board[12+i]
            currentScore += board[4+i]
            board[8+i] = 0
            board[12+i] = 0
        }
        else if(board[8+i]===board[12+i] && board[8+i]!=0){
            board[8+i] += board[12+i]
            currentScore += board[8+i]
            board[12+i] = 0
        }
        //Removing Zero and shifting
        for(let j=0;j<3;j++){
            if(board[i+0]==0){
                board[i+0] = board[i+4]
                board[i+4] = board[i+8]
                board[i+8] = board[i+12]
                board[i+12] = 0
            }
            if(board[i+4]==0){
                board[i+4] = board[i+8]
                board[i+8] = board[i+12]
                board[i+12] = 0
            }
            if(board[i+8]==0){
                board[i+8] = board[i+12]
                board[i+12] = 0
            }
        }
    }
}

function downKey(){
    for(let i=0;i<4;i++){
        //Merging all like
        if(board[12+i]===board[8+i] && board[12+i]!=0){
            board[12+i] += board[8+i]
            currentScore += board[12+i]
            if(board[4+i]===board[0+i]){
                board[8+i] = board[4+i]+board[0+i]
                currentScore += board[8+i]
                board[4+i] = 0
                board[0+i] = 0
            }
            else{
                board[8+i] = board[4+i]
                board[4+i] = board[0+i]
                board[0+i] = 0
            }
        }
        else if(board[12+i]===board[4+i] && board[12+i]!=0 && board[8+i]===0){
            board[12+i] += board[4+i]
            currentScore += board[12+i]
            board[8+i] = board[0+i]
            board[4+i] = 0
            board[0+i] = 0
        }
        else if(board[12+i]===board[0+i] && board[12+i]!=0 && board[8+i]===0 && board[4+i]===0){
            board[12+i] += board[0+i]
            currentScore += board[12+i]
            board[4+i] = 0
            board[8+i] = 0
            board[0+i] = 0
        }
        else if(board[8+i]===board[4+i] && board[8+i]!=0){
            board[8+i] += board[4+i]
            currentScore += board[8+i]
            board[4+i] = board[0+i]
            board[0+i] = 0
        }
        else if(board[8+i]===board[0+i] && board[8+i]!=0 && board[4+i]===0){
            board[8+i] += board[0+i]
            currentScore += board[8+i]
            board[4+i] = 0
            board[0+i] = 0
        }
        else if(board[4+i]===board[0+i] && board[4+i]!=0){
            board[4+i] += board[0+i]
            currentScore += board[4+i]
            board[0+i] = 0
        }
        //Removing Zero and shifting
        for(let j=0;j<3;j++){
            if(board[i+12]==0){
                board[i+12] = board[i+8]
                board[i+8] = board[i+4]
                board[i+4] = board[i+0]
                board[i+0] = 0
            }
            if(board[i+8]==0){
                board[i+8] = board[i+4]
                board[i+4] = board[i+0]
                board[i+0] = 0
            }
            if(board[i+4]==0){
                board[i+4] = board[i+0]
                board[i+0] = 0
            }
        }
    }
}

function leftKey(){
    for(let i=0;i<4;i++){
        //Merging all like
        if(board[0+i*4]===board[1+i*4] && board[0+i*4]!=0){
            board[0+i*4] += board[1+i*4]
            currentScore += board[0+i*4]
            if(board[2+i*4]===board[3+i*4]){
                board[1+i*4] = board[2+i*4]+board[3+i*4]
                currentScore += board[1+i*4]
                board[2+i*4] = 0
                board[3+i*4] = 0
            }
            else{
                board[1+i*4] = board[2+i*4]
                board[2+i*4] = board[3+i*4]
                board[3+i*4] = 0
            }
        }
        else if(board[0+i*4]===board[2+i*4] && board[0+i*4]!=0 && board[1+i*4]===0){
            board[0+i*4] += board[2+i*4]
            currentScore += board[0+i*4]
            board[1+i*4] = board[3+i*4]
            board[2+i*4] = 0
            board[3+i*4] = 0
        }
        else if(board[0+i*4]===board[3+i*4] && board[0+i*4]!=0 && board[1+i*4]===0 && board[2+i*4]===0){
            board[0+i*4] += board[3+i*4]
            currentScore += board[0+i*4]
            board[1+i*4] = 0
            board[2+i*4] = 0
            board[3+i*4] = 0
        }
        else if(board[1+i*4]===board[2+i*4] && board[1+i*4]!=0){
            board[1+i*4] += board[2+i*4]
            currentScore += board[1+i*4]
            board[2+i*4] = board[3+i*4]
            board[3+i*4] = 0
        }
        else if(board[1+i*4]===board[3+i*4] && board[1+i*4]!=0 && board[2+i*4]===0){
            board[1+i*4] += board[3+i*4]
            currentScore += board[1+i*4]
            board[2+i*4] = 0
            board[3+i*4] = 0
        }
        else if(board[2+i*4]===board[3+i*4] && board[2+i*4]!=0){
            board[2+i*4] += board[3+i*4]
            currentScore += board[2+i*4]
            board[3+i*4] = 0
        }
        //Removing Zero and shifting
        for(let j=0;j<3;j++){
            if(board[i*4+0]==0){
                board[i*4+0] = board[i*4+1]
                board[i*4+1] = board[i*4+2]
                board[i*4+2] = board[i*4+3]
                board[i*4+3] = 0
            }
            if(board[i*4+1]==0){
                board[i*4+1] = board[i*4+2]
                board[i*4+2] = board[i*4+3]
                board[i*4+3] = 0
            }
            if(board[i*4+2]==0){
                board[i*4+2] = board[i*4+3]
                board[i*4+3] = 0
            }
        }
    }
}

function rightKey(){
    for(let i=0;i<4;i++){
        //Merging all like
        if(board[3+i*4]===board[2+i*4] && board[3+i*4]!=0){
            board[3+i*4] += board[2+i*4]
            currentScore += board[3+i*4]
            if(board[1+i*4]===board[0+i*4]){
                board[2+i*4] = board[1+i*4]+board[0+i*4]
                currentScore += board[2+i*4]
                board[1+i*4] = 0
                board[0+i*4] = 0
            }
            else{
                board[2+i*4] = board[1+i*4]
                board[1+i*4] = board[0+i*4]
                board[0+i*4] = 0
            }
        }
        else if(board[3+i*4]===board[1+i*4] && board[3+i*4]!=0 && board[2+i*4]===0){
            board[3+i*4] += board[1+i*4]
            currentScore += board[3+i*4]
            board[2+i*4] = board[0+i*4]
            board[1+i*4] = 0
            board[0+i*4] = 0
        }
        else if(board[3+i*4]===board[0+i*4] && board[3+i*4]!=0 && board[2+i*4]===0 && board[1+i*4]===0){
            board[3+i*4] += board[0+i*4]
            currentScore += board[3+i*4]
            board[1+i*4] = 0
            board[2+i*4] = 0
            board[0+i*4] = 0
        }
        else if(board[2+i*4]===board[1+i*4] && board[1+i*4]!=0){
            board[2+i*4] += board[1+i*4]
            currentScore += board[2+i*4]
            board[1+i*4] = board[0+i*4]
            board[0+i*4] = 0
        }
        else if(board[2+i*4]===board[0+i*4] && board[2+i*4]!=0 && board[1+i*4]===0){
            board[2+i*4] += board[0+i*4]
            currentScore += board[2+i*4]
            board[1+i*4] = 0
            board[0+i*4] = 0
        }
        else if(board[1+i*4]===board[0+i*4] && board[1+i*4]!=0){
            board[1+i*4] += board[0+i*4]
            currentScore += board[1+i*4]
            board[0+i*4] = 0
        }
        //Removing Zero and shifting
        for(let j=0;j<3;j++){
            if(board[i*4+3]==0){
                board[i*4+3] = board[i*4+2]
                board[i*4+2] = board[i*4+1]
                board[i*4+1] = board[i*4+0]
                board[i*4+0] = 0
            }
            if(board[i*4+2]==0){
                board[i*4+2] = board[i*4+1]
                board[i*4+1] = board[i*4+0]
                board[i*4+0] = 0
            }
            if(board[i*4+1]==0){
                board[i*4+1] = board[i*4+0]
                board[i*4+0] = 0
            }
        }
    }
}

function start(){
    init()
    reload()
    document.getElementById("overlay").style.display = "none"
    document.onkeydown = function(e){
        let prevBoard = []
        for(let i=0;i<16;i++){
            prevBoard.push(board[i])
        }
        if (e.keyCode == '38') {
            upKey()
        }
        else if (e.keyCode == '40') {
            downKey()
        }
        else if (e.keyCode == '37') {
            leftKey()
        }
        else if (e.keyCode == '39') {
            rightKey()
        }
        let changed = false;
        for(let i=0;i<16;i++){
            if(board[i]!=prevBoard[i]){
                changed = true;
            }
        }
        if(changed){
            let n =0;
            let vacentCells = []
            for(let p=0;p<16;p++){
                if(board[p]==0){
                    n++
                    vacentCells.push(p)
                }
            }
            if(Math.floor(Math.random() * 100) >= 5){
                board[vacentCells[Math.floor(Math.random() * n)]] = 2
            }
            else{
                board[vacentCells[Math.floor(Math.random() * n)]] = 4
            }

        }
        reload()
    }
    document.addEventListener('touchstart', handleTouchStart, false)  
    document.addEventListener('touchmove', handleTouchMove, false)

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        let prevBoard = []
        for(let i=0;i<16;i++){
            prevBoard.push(board[i])
        }

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) { 
                leftKey()
            } else {
                rightKey()
            }                       
        } else {
            if ( yDiff > 0 ) {
                upKey() 
            } else { 
                downKey()
            }                                                                 
        }
        /* reset values */
        xDown = null
        yDown = null
        if(changed){
            let n =0;
            let vacentCells = []
            for(let p=0;p<16;p++){
                if(board[p]==0){
                    n++
                    vacentCells.push(p)
                }
            }
            if(Math.floor(Math.random() * 100) >= 5){
                board[vacentCells[Math.floor(Math.random() * n)]] = 2
            }
            else{
                board[vacentCells[Math.floor(Math.random() * n)]] = 4
            }
        }
        reload()                                          
    }
}

document.getElementById("restart").addEventListener("click", start)
start()
