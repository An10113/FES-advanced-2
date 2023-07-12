const allSquare = document.querySelectorAll(".board__square")
const title = document.querySelector(".board__title")
let counter = 0
let currentPlayer = "X"
let board = new Array(9).fill(undefined)
let gameOver = false

    allSquare.forEach((square, index) => {
        square.addEventListener("click", () => {
            if(square.innerHTML || gameOver){
                return
            }
            
            board[index] = currentPlayer
            square.innerHTML = currentPlayer
            if(checkWin()){
                title.innerHTML = `${currentPlayer} won the game`
                gameOver = true
                return;
            }
            if(checkDraw()){
                title.innerHTML = " It's a Draw"
                gameOver = true
                return
            }

                currentPlayer = currentPlayer === "X" ? "O" : "X"
                title.innerHTML = `${currentPlayer}'s turn`
        })
    })
    function checkDraw(){
        return board.every(elem => {
            if(elem){
                return true
            }
        })
    }
    function checkWin(){
        const winIndicies = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ]
    for(let i = 0; i < winIndicies.length; ++i){
        const matchingIndicies = winIndicies[i]
        let symbol1 = board[matchingIndicies[0]]
        let symbol2 = board[matchingIndicies[1]]
        let symbol3 = board[matchingIndicies[2]]
        if(!symbol1 || !symbol2 || !symbol3){
            continue;
        }
        if(symbol1 === symbol2 && symbol2 === symbol3 ){
            return true
        }
    }
}
function restartGame(){
    allSquare.forEach(element => {
        element.innerHTML = ""
    });
    board = new Array(9).fill(undefined)
    title.innerHTML = `${currentPlayer}'s turn`
    gameOver = false
}