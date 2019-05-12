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
    let random1 = Math.floor(Math.random() * 16);
    let random2 = Math.floor(Math.random() * 16);
    board[random1] = 2;
    if(random1===random2){
        board[random1-1] = 2;
    }
    else{
        board[random2] = 2;
    }
    for(let i=0;i<16;i++){
        displayBoard.push(document.getElementById("boardElement"+i))
    }
}
function reload(){
    for(let i=0;i<16;i++){
        if(board[i] != 0){
            displayBoard[i].innerHTML = board[i]
            displayBoard[i].className = "boardCol value"+board[i];
        }
        else{
            displayBoard[i].innerHTML = ""
            displayBoard[i].className = "boardCol";
        }
    }
}
function start(){
    init();
    reload();
    document.onkeydown = function(e){
        if (e.keyCode == '38') {
            // up arrow
            for(let r= 0;r<1;r++){
                for(let p =0;p<4;p++){
                    if(board[0+p]===board[4+p]){
                        board[0+p] += board[4+p]
                        board[4+p] = board[8+p]
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    if(board[4+p]===board[8+p]){
                        board[4+p] += board[8+p]
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    if(board[8+p]===board[12+p]){
                        board[8+p] += board[12+p]
                        board[12+p] = 0
                    }
                    if(board[8+p] ==0){
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    if(board[4+p]==0){
                        board[4+p] = board[8+p]
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    if(board[0+p]==0){
                        board[0+p] = board[4+p]
                        board[4+p] = board[8+p]
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    if(board[4+p]==0){
                        board[4+p] = board[8+p]
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    if(board[8+p] ==0){
                        board[8+p] = board[12+p]
                        board[12+p] = 0
                    }
                    
                }
            } 
        }
        else if (e.keyCode == '40') {
            // down arrow
            for(let r= 0;r<1;r++){
                for(let p =0;p<4;p++){
                    if(board[12+p]===board[8+p]){
                        board[12+p] += board[8+p]
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[8+p]===board[4+p]){
                        board[8+p] += board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[4+p]===board[0+p]){
                        board[4+p] += board[0+p]
                        board[0+p] = 0
                    }
                    if(board[4+p] ==0){
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[8+p]==0){
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[12+p]==0){
                        board[12+p] = board[8+p]
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[8+p]==0){
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[4+p] ==0){
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    
                }
            }
        }
        else if (e.keyCode == '37') {
            // left arrow
            for(let r= 0;r<1;r++){
                for(let p =0;p<4;p++){
                    if(board[0+p*4]===board[1+p*4]){
                        board[0+p*4] += board[1+p*4]
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[1+p*4]===board[2+p*4]){
                        board[1+p*4] += board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[2+p*4]===board[3+p*4]){
                        board[2+p*4] += board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[2+p*4] ==0){
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[1+p*4]==0){
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[0+p*4]==0){
                        board[0+p*4] = board[1+p*4]
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[1+p*4]==0){
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[2+p*4] ==0){
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    
                }

            }
        }
        else if (e.keyCode == '39') {
            // right arrow
            for(let r= 0;r<1;r++){
                for(let p =0;p<4;p++){
                    if(board[3+p*4]===board[2+p*4]){
                        board[3+p*4] += board[2+p*4]
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[2+p*4]===board[1+p*4]){
                        board[2+p*4] += board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[1+p*4]===board[0+p*4]){
                        board[1+p*4] += board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[1+p*4] ==0){
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[2+p*4]==0){
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[3+p*4]==0){
                        board[3+p*4] = board[2+p*4]
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[2+p*4]==0){
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[1+p*4] ==0){
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    
                }

            }
        }
        let n =0;
        let vacentCells = []
        for(let p=0;p<16;p++){
            if(board[p]==0){
                n++;
                vacentCells.push(p)
            }
        }
        board[vacentCells[Math.floor(Math.random() * n)]] = 2;
        reload()
    };
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

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

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */ 
                for(let p =0;p<4;p++){
                    if(board[0+p*4]===board[1+p*4]){
                        board[0+p*4] += board[1+p*4]
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[1+p*4]===board[2+p*4]){
                        board[1+p*4] += board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[2+p*4]===board[3+p*4]){
                        board[2+p*4] += board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[2+p*4] ==0){
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[1+p*4]==0){
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[0+p*4]==0){
                        board[0+p*4] = board[1+p*4]
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[1+p*4]==0){
                        board[1+p*4] = board[2+p*4]
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    if(board[2+p*4] ==0){
                        board[2+p*4] = board[3+p*4]
                        board[3+p*4] = 0
                    }
                    
                }
            } else {
                /* right swipe */
                for(let p =0;p<4;p++){
                    if(board[3+p*4]===board[2+p*4]){
                        board[3+p*4] += board[2+p*4]
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[2+p*4]===board[1+p*4]){
                        board[2+p*4] += board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[1+p*4]===board[0+p*4]){
                        board[1+p*4] += board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[1+p*4] ==0){
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[2+p*4]==0){
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[3+p*4]==0){
                        board[3+p*4] = board[2+p*4]
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[2+p*4]==0){
                        board[2+p*4] = board[1+p*4]
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    if(board[1+p*4] ==0){
                        board[1+p*4] = board[0+p*4]
                        board[0+p*4] = 0
                    }
                    
                }
            }                       
        } else {
            if ( yDiff > 0 ) {
                for(let r= 0;r<1;r++){
                    for(let p =0;p<4;p++){
                        if(board[0+p]===board[4+p]){
                            board[0+p] += board[4+p]
                            board[4+p] = board[8+p]
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        if(board[4+p]===board[8+p]){
                            board[4+p] += board[8+p]
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        if(board[8+p]===board[12+p]){
                            board[8+p] += board[12+p]
                            board[12+p] = 0
                        }
                        if(board[8+p] ==0){
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        if(board[4+p]==0){
                            board[4+p] = board[8+p]
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        if(board[0+p]==0){
                            board[0+p] = board[4+p]
                            board[4+p] = board[8+p]
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        if(board[4+p]==0){
                            board[4+p] = board[8+p]
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        if(board[8+p] ==0){
                            board[8+p] = board[12+p]
                            board[12+p] = 0
                        }
                        
                    }
                } 
            } else { 
                /* down swipe */
                for(let p =0;p<4;p++){
                    if(board[12+p]===board[8+p]){
                        board[12+p] += board[8+p]
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[8+p]===board[4+p]){
                        board[8+p] += board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[4+p]===board[0+p]){
                        board[4+p] += board[0+p]
                        board[0+p] = 0
                    }
                    if(board[4+p] ==0){
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[8+p]==0){
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[12+p]==0){
                        board[12+p] = board[8+p]
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[8+p]==0){
                        board[8+p] = board[4+p]
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    if(board[4+p] ==0){
                        board[4+p] = board[0+p]
                        board[0+p] = 0
                    }
                    
                }
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;   
        let n =0;
        let vacentCells = []
        for(let p=0;p<16;p++){
            if(board[p]==0){
                n++;
                vacentCells.push(p)
            }
        }
        board[vacentCells[Math.floor(Math.random() * n)]] = 2;
        reload()                                          
    }

}


document.getElementById("restart").addEventListener("click", start );
start();
