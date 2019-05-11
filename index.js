var game = {
    board: [
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ],
    displayBoard:[],
    currentScore: 0,
    highScore: 0,
    init : function() {
        for(let i=0;i<16;i++){
            this.board[i] = 0
        }
        let random1 = Math.floor(Math.random() * 16);
        let random2 = Math.floor(Math.random() * 16);
        this.board[random1] = 2;
        if(random1===random2){
            this.board[random1-1] = 2;
        }
        else{
            this.board[random2] = 2;
        }
        for(let i=0;i<16;i++){
            this.displayBoard.push(document.getElementById("boardElement"+i))
        }
    },
    reload : function(){
        for(let i=0;i<16;i++){
            if(this.board[i] != 0){
                this.displayBoard[i].innerHTML = this.board[i]
                this.displayBoard[i].className += " value"+this.board[i]+" ";
            }
            else{
                this.displayBoard[i].innerHTML = ""
                this.displayBoard[i].className = "boardCol";
            }
        }
    },
    start:function(){
        this.init();
        this.reload();

    }
}

function start() {
    game.start()
}

document.getElementById("restart").addEventListener("click", start );
start();